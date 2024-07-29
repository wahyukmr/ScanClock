import {useState} from 'react';
import {STORAGE_KEY} from '../constants';
import {storageService} from '../services/storageService';

export const useTheme = () => {
  const [theme, setTheme] = useState(null);

  const loadTheme = () => {
    try {
      const storedTheme = storageService.getItemFromStorage(STORAGE_KEY.THEME);
      if (storedTheme && storedTheme !== 'system') {
        setTheme(storedTheme);
      } else {
        setTheme('system');
      }
    } catch (error) {
      setTheme('system');
      throw new Error('Failed to load theme: ' + error.message);
    }
  };

  const saveTheme = newTheme => {
    try {
      storageService.setItemToStorage(
        STORAGE_KEY.THEME,
        newTheme === 'system' ? 'system' : newTheme,
      );
      setTheme(newTheme);
    } catch (error) {
      throw new Error('Failed to save theme: ' + error.message);
    }
  };

  const changeTheme = newTheme => {
    setTheme(newTheme);
    saveTheme(newTheme);
  };

  return {theme, changeTheme, loadTheme};
};
