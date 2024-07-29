import EncryptedStorage from 'react-native-encrypted-storage/';
import {API_ENDPOINTS, STORAGE_KEY} from '../../../constants';
import {axiosInstance} from '../../../services/axiosInstance';

export const userService = {
  fetchUserData: async () => {
    try {
      const {data} = await axiosInstance.get(API_ENDPOINTS.USER, {
        requiresAuth: true,
      });

      return data;
    } catch (error) {
      throw new Error('Failed to fetch user informations');
    }
  },
  storeUserData: async userData => {
    try {
      await EncryptedStorage.setItem(
        STORAGE_KEY.USER_INFO,
        JSON.stringify(userData),
      );
    } catch (error) {
      throw new Error("Can't store user informations: ", error.message);
    }
  },
  getUserData: async () => {
    try {
      const userData = await EncryptedStorage.getItem(STORAGE_KEY.USER_INFO);
      return JSON.parse(userData);
    } catch (error) {
      throw new Error('Error getting user informations: ', error.message);
    }
  },
  clearUserData: async () => {
    try {
      await EncryptedStorage.removeItem(STORAGE_KEY.USER_INFO);
    } catch (error) {
      throw new Error('Error removing user informations: ', error.message);
    }
  },
};
