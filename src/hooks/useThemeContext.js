import {useContext} from 'react';
import {useColorScheme} from 'react-native';
import {DARK_MODE, LIGHT_MODE} from '../constants';
import ThemeContext from '../contexts/ThemeProvider';

export const useThemeContext = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  const systemColorScheme = useColorScheme();

  const themePreferences = (theme || systemColorScheme) ?? 'light';
  const themeColors = themePreferences === 'dark' ? DARK_MODE : LIGHT_MODE;

  return {
    themeColors,
    themePreferences,
    isSystemTheme: !theme,
    isDark: themePreferences === 'dark',
    setColorTheme: setTheme,
  };
};
