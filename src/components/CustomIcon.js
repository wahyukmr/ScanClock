import React from 'react';
import VectorIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useThemeContext} from '../hooks/useThemeContext';
import {customIconStyles} from './CustomIcon.styles';

const CustomIcon = ({name, size, color}) => {
  const {styles} = useThemeContext(customIconStyles);
  return (
    <VectorIcon
      name={name}
      size={size}
      color={color === 'primary' ? styles.iconPrimary : styles.iconSecondary}
    />
  );
};

export default CustomIcon;
