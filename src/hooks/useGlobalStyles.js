import {useMemo} from 'react';
import {globalStyles} from '../styles';
import useThemeContext from './useThemeContext';

const useGlobalStyles = () => {
  const {colors} = useThemeContext();

  return useMemo(() => globalStyles(colors), [colors]);
};

export default useGlobalStyles;
