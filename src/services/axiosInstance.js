import axios from 'axios';
import axiosRetry from 'axios-retry';
import {BASE_URL} from '../constants';
import {authService} from '../features/auth/services/authService';
import {credentialService} from './credentialService';
import {tokenStorage} from './tokenService';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosRetry(axiosInstance, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
});

axiosInstance.interceptors.request.use(
  async config => {
    if (config.requiresAuth) {
      const accessToken = await tokenStorage.getToken();
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }

    return config;
  },
  error => Promise.reject(error),
);

const failedQueue = [];
let isRefreshingToken = false;

const processQueue = (error, token = null) => {
  failedQueue.forEach(({resolve, reject}) =>
    error ? reject(error) : resolve(token),
  );
  failedQueue.length = 0;
};

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (
      (error.response?.status === 401 ||
        error.response?.data?.status === 'Token is Expired') &&
      !originalRequest._retry &&
      !isRefreshingToken
    ) {
      originalRequest._retry = true;
      isRefreshingToken = true;

      try {
        const credentials = await credentialService.getCredentials();
        if (credentials) {
          const dataUser = await authService.loginRequest(
            JSON.parse(credentials),
          );
          const {token: newToken} = dataUser;
          await tokenStorage.storeToken(newToken);
          axiosInstance.defaults.headers.common.Authorization = `Bearer ${newToken}`;
          originalRequest.headers.Authorization = `Bearer ${newToken}`;

          processQueue(null, newToken);
          return axiosInstance(originalRequest);
        } else {
          throw new Error('No credentials stored');
        }
      } catch (refreshTokenError) {
        processQueue(refreshTokenError, null);

        throw new Error(
          'Refresh token failed, potentially requiring user logout:',
          refreshTokenError,
        );
      } finally {
        isRefreshingToken = false;
      }
    }

    return Promise.reject(error);
  },
);
