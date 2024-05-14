import React, {createContext, useEffect, useState} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import EncryptedStorage from 'react-native-encrypted-storage';

const THEME_ENCRYPTED_STORAGE_KEY = 'THEME_STATE';

export const ThemeContext = createContext({
  theme: '',
  setTheme: () => {},
});

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedTheme = await EncryptedStorage.getItem(
          THEME_ENCRYPTED_STORAGE_KEY,
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
            THEME_ENCRYPTED_STORAGE_KEY,
            JSON.stringify(theme),
          );
        } else {
          await EncryptedStorage.removeItem(THEME_ENCRYPTED_STORAGE_KEY);
        }
      } catch (error) {
        console.error('Failed to save theme: ' + error);
      }
    };

    saveTheme();
  }, [theme]);

  // * Gunakan jika aplikasi mengalami re-render yang tidak perlu dan mempengaruhi kinerja
  // const contextState = useMemo(
  //   () => ({theme, setTheme, loading}),
  //   [theme, loading],
  // );

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
