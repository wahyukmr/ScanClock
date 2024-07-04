import {useContext} from 'react';
import {useColorScheme} from 'react-native';
import {DARK_MODE, LIGHT_MODE} from '../constants';
import ThemeContext from '../contexts/ThemeContext';

/**
 * Hook untuk mengelola tema dan gaya berdasarkan konteks dan skema warna sistem.
 * @param {function} [styleSheets] - Fungsi untuk menghasilkan gaya berdasarkan tema warna.
 * @returns {object} - Objek yang berisi tema, gaya, dan informasi terkait tema.
 */
export const useThemeContext = styleSheets => {
  const {theme, changeTheme} = useContext(ThemeContext);
  const systemColorScheme = useColorScheme();

  const themePreferences = theme === 'system' ? systemColorScheme : theme;

  const isDark = themePreferences === 'dark';

  const themeColors = isDark ? DARK_MODE : LIGHT_MODE;

  const styles = styleSheets ? styleSheets(themeColors) : null;

  return {
    styles,
    themeColors,
    themePreferences: theme,
    isSystemTheme: theme === 'system',
    isDark,
    setColorTheme: changeTheme,
  };
};
