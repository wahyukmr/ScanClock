import {useContext} from 'react';
import {useColorScheme} from 'react-native';
import {DARK_MODE, LIGHT_MODE} from '../constants';
import ThemeContext from '../contexts/ThemeProvider';

/**
 * Hook untuk mengelola tema dan gaya berdasarkan konteks dan skema warna sistem.
 * @param {function} [styleSheets] - Fungsi untuk menghasilkan gaya berdasarkan tema warna.
 * @returns {object} - Objek yang berisi tema, gaya, dan informasi terkait tema.
 */
export const useThemeContext = (styleSheets = () => ({})) => {
  const {theme, setTheme} = useContext(ThemeContext);
  const systemColorScheme = useColorScheme();

  const themePreferences = (theme || systemColorScheme) ?? 'light';
  const themeColors = themePreferences === 'dark' ? DARK_MODE : LIGHT_MODE;

  const styles = styleSheets(themeColors);

  return {
    styles,
    themeColors,
    themePreferences,
    isSystemTheme: !theme,
    isDark: themePreferences === 'dark',
    setColorTheme: setTheme,
  };
};
