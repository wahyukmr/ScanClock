import EncryptedStorage from 'react-native-encrypted-storage';
import {STORAGE_KEY} from '../constants';

export const credentialService = {
  setCredentials: async (email, password) => {
    try {
      await EncryptedStorage.setItem(
        STORAGE_KEY.CREDENTIALS,
        JSON.stringify({
          email,
          password,
        }),
      );
    } catch (error) {
      throw new Error('Error saving credentials user', error.message);
    }
  },

  getCredentials: async () => {
    try {
      return await EncryptedStorage.getItem(STORAGE_KEY.CREDENTIALS);
    } catch (error) {
      throw new Error('Error getting credentials user: ', error.message);
    }
  },

  removeCredentials: async () => {
    try {
      await EncryptedStorage.removeItem(STORAGE_KEY.CREDENTIALS);
    } catch (error) {
      throw new Error('Error removing credentials user: ', error.message);
    }
  },
};
