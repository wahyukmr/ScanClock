import EncryptedStorage from 'react-native-encrypted-storage/';
import {API_ENDPOINTS, STORAGE_KEY} from '../../../constants';
import {axiosInstance} from '../../../services/axiosInstance';

export const userService = {
  fetchUserData: async () => {
    try {
      const userDataFromStorage = await userService.getUserData();
      if (userDataFromStorage) {
        return userDataFromStorage;
      }

      const {data} = await axiosInstance.get(API_ENDPOINTS.USER, {
        requiresAuth: true,
      });
      await userService.storeUserData(data);
      return data;
    } catch (error) {
      throw new Error('Failed to fetch user informations: ', error.message);
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
      await EncryptedStorage.getItem(STORAGE_KEY.USER_INFO);
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
