import axios from 'axios';
import {BASE_URL} from '../constants';
import {
  getCredentials,
  getToken,
  removeCredentials,
  removeToken,
  storeToken,
} from '../services/tokenService';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async config => {
    // Menangani apakah permintaan memerlukan token atau tidak
    if (config.requiresAuth) {
      try {
        const accessToken = await getToken();
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
      } catch (error) {
        throw new Error('Error getting token:', error.message);
      }
    }

    console.log('config: ' + config.data, config.headers, config.auth);
    return config;
  },
  error => Promise.reject(error),
);

let isRefreshingToken = false;
const failedQueue = [];

// Memastikan bahwa semua permintaan yang gagal karena token kadaluarsa akan diproses ulang setelah token berhasil di-refresh.
const processQueue = (error, token = null) => {
  failedQueue.forEach(({resolve, reject}) =>
    error ? reject(error) : resolve(token),
  );
  failedQueue.length = 0;
};

// Untuk menangani token yang kadaluarsa dengan mencoba refresh token dan mengulangi permintaan asli sekali dengan token baru.
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (
      (error.response.status === 401 ||
        error.response.data?.status === 'Token is Expired') &&
      !originalRequest._retry &&
      !isRefreshingToken
    ) {
      isRefreshingToken = true;

      try {
        const credentials = await getCredentials();
        if (credentials) {
          const {email, password} = credentials;

          const {token: newToken} = await login(email, password);

          await storeToken(newToken);
          axiosInstance.defaults.headers.common.Authorization = `Bearer ${newToken}`;
          originalRequest.headers.Authorization = `Bearer ${newToken}`;

          processQueue(null, newToken);
          return axiosInstance(originalRequest);
        } else {
          throw new Error('No credentials stored');
        }
      } catch (refreshTokenError) {
        // Mengelola token kadaluarsa dengan mencoba refresh token dan mengarahkan pengguna untuk login kembali jika refresh token gagal.
        processQueue(refreshTokenError, null);
        await removeToken();
        await removeCredentials();

        throw new Error(
          'Refresh token failed, potentially requiring user logout:',
          refreshError,
        );
      } finally {
        isRefreshingToken = false;
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
