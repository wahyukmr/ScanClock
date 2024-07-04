import EncryptedStorage from 'react-native-encrypted-storage';
import {STORAGE_KEY} from '../constants';

export const storeToken = async token => {
  try {
    await EncryptedStorage.setItem(STORAGE_KEY.TOKEN, token);
  } catch (error) {
    throw new Error("Can't store token: " + error.message);
  }
};

export const getToken = async () => {
  try {
    return await EncryptedStorage.getItem(STORAGE_KEY.TOKEN);
  } catch (error) {
    throw new Error('Error getting token', error.message);
  }
};

export const removeToken = async () => {
  try {
    await EncryptedStorage.removeItem(STORAGE_KEY.TOKEN);
  } catch (error) {
    throw new Error('Error removing token', error.message);
  }
};

export const setCredentials = async (email, password) => {
  try {
    await EncryptedStorage.setItem(STORAGE_KEY.CREDENTIALS, {email, password});
  } catch (error) {
    throw new Error('Error saving credentials user', error.message);
  }
};

export const getCredentials = async () => {
  try {
    return await EncryptedStorage.getItem(STORAGE_KEY.CREDENTIALS);
  } catch (error) {
    throw new Error('Error getting credentials user', error.message);
  }
};

export const removeCredentials = async () => {
  try {
    await EncryptedStorage.removeItem(STORAGE_KEY.CREDENTIALS);
  } catch (error) {
    throw new Error('Error removing credentials user', error.message);
  }
};
