import React, {createContext, useEffect, useMemo, useState} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import EncryptedStorage from 'react-native-encrypted-storage';
import {ENCRYPTED_STORAGE_KEY} from '../constants';

const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
});

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedTheme = await EncryptedStorage.getItem(
          ENCRYPTED_STORAGE_KEY.THEME,
        );

        if (storedTheme) {
          setTheme(JSON.parse(storedTheme));
        }
      } catch (error) {
        console.error('Failed to load theme: ' + error);
      } finally {
        RNBootSplash.hide();
      }
    };

    loadTheme();
  }, []);

  useEffect(() => {
    const saveTheme = async () => {
      try {
        if (theme) {
          await EncryptedStorage.setItem(
            ENCRYPTED_STORAGE_KEY.THEME,
            JSON.stringify(theme),
          );
        } else {
          await EncryptedStorage.removeItem(ENCRYPTED_STORAGE_KEY.THEME);
        }
      } catch (error) {
        console.error('Failed to save theme: ' + error);
      }
    };

    saveTheme();
  }, [theme]);

  // * Gunakan jika aplikasi mengalami re-render yang tidak perlu dan mempengaruhi kinerja
  const contextState = useMemo(() => ({theme, setTheme}), [theme]);

  return (
    <ThemeContext.Provider value={contextState}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
