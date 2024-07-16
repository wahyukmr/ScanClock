import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

export const storageService = {
  setItemToStorage: (key, value) => {
    storage.set(key, value);
  },

  getItemFromStorage: key => {
    return storage.getString(key);
  },

  removeAllItemFromStorage: () => {
    storage.clearAll();
  },
};
