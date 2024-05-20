import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DIMENSIONS} from '../../../constants';

const FormIcon = ({icon, color}) => {
  return <Icon name={icon} size={DIMENSIONS.iconMedium} color={color} />;
};

export default FormIcon;
