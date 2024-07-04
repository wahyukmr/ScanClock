import {useEffect, useState} from 'react';
import {STORAGE_KEY} from '../constants';
import {getItemFromStorage, setItemToStorage} from '../services/storageService';

export const useTheme = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const loadTheme = () => {
      try {
        const storedTheme = getItemFromStorage(STORAGE_KEY.THEME);
        if (storedTheme && storedTheme !== 'system') {
          setTheme(storedTheme);
        } else {
          setTheme('system');
        }
      } catch (error) {
        console.error('Failed to load theme: ' + error);
      }
    };

    loadTheme();
  }, []);

  useEffect(() => {
    try {
      if (theme) {
        setItemToStorage(
          STORAGE_KEY.THEME,
          theme === 'system' ? 'system' : theme,
        );
      }
    } catch (error) {
      console.error('Failed to save theme: ' + error);
    }
  }, [theme]);

  const changeTheme = newTheme => setTheme(newTheme);

  return {theme, changeTheme};
};
