import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

export const setItemToStorage = (key, value) => {
  storage.set(key, value);
};

export const getItemFromStorage = key => {
  return storage.getString(key);
};
