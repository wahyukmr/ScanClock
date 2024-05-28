import {useMemo} from 'react';
import useThemeContext from './useThemeContext';

const useThemedStyles = styleSheets => {
  const {colors} = useThemeContext();

  return useMemo(() => styleSheets(colors), [colors]);
};

export default useThemedStyles;
