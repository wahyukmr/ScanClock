import {useContext} from 'react';
import {useColorScheme} from 'react-native';
import {ThemeContext} from '../contexts/ThemeProvider';
import {darkModeColors, lightModeColors} from '../styles/themes';

const useThemeContext = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  const systemColorScheme = useColorScheme();

  const colorTheme = (theme || systemColorScheme) ?? 'light';
  const colors = colorTheme === 'dark' ? darkModeColors : lightModeColors;

  return {
    colors,
    colorTheme,
    isSystemTheme: !theme,
    isDark: theme === 'dark',
    setColorTheme: setTheme,
  };
};

export default useThemeContext;
