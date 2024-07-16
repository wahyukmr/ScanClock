import EncryptedStorage from 'react-native-encrypted-storage';
import {STORAGE_KEY} from '../constants';

export const tokenStorage = {
  storeToken: async token => {
    try {
      await EncryptedStorage.setItem(STORAGE_KEY.TOKEN, token);
    } catch (error) {
      throw new Error("Can't store token: " + error.message);
    }
  },

  getToken: async () => {
    try {
      return await EncryptedStorage.getItem(STORAGE_KEY.TOKEN);
    } catch (error) {
      throw new Error('Error getting token: ', error.message);
    }
  },

  removeToken: async () => {
    try {
      await EncryptedStorage.removeItem(STORAGE_KEY.TOKEN);
    } catch (error) {
      throw new Error('Error removing token: ', error.message);
    }
  },
};
