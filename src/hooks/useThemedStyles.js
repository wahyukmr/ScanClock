import {useMemo} from 'react';
import {useThemeContext} from './useThemeContext';

const useThemedStyles = styleSheets => {
  const {themeColors} = useThemeContext();

  return useMemo(() => styleSheets(themeColors), [themeColors]);
};

export default useThemedStyles;
