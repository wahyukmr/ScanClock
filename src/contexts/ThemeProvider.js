import React, {createContext, useEffect, useMemo, useState} from 'react';
import {getPreferredTheme, setPreferredTheme} from '../utils/preferenceStorage';

const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
});

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const loadTheme = () => {
      try {
        const storedTheme = getPreferredTheme();
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
        setPreferredTheme(theme === 'system' ? 'system' : theme);
      }
    } catch (error) {
      console.error('Failed to save theme: ' + error);
    }
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
