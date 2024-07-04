import React, {createContext} from 'react';
import {useTheme} from '../hooks/useTheme';

const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
});

export const ThemeProvider = ({children}) => {
  const themeValues = useTheme();

  return (
    <ThemeContext.Provider value={themeValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
