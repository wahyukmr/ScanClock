import {useMemo} from 'react';
import {globalStyles} from '../styles';
import {useThemeContext} from './useThemeContext';

const useGlobalStyles = () => {
  const {themeColors} = useThemeContext();

  return useMemo(() => globalStyles(themeColors), [themeColors]);
};

export default useGlobalStyles;
