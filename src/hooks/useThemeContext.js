import {useContext} from 'react';
import {useColorScheme} from 'react-native';
import {DARK_MODE, LIGHT_MODE} from '../constants';
import {ThemeContext} from '../contexts';

const useThemeContext = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  const systemColorScheme = useColorScheme();

  const colorTheme = (theme || systemColorScheme) ?? 'light';
  const colors = colorTheme === 'dark' ? DARK_MODE : LIGHT_MODE;

  return {
    colors,
    colorTheme,
    isSystemTheme: !theme,
    isDark: theme === 'dark',
    setColorTheme: setTheme,
  };
};

export default useThemeContext;
