import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import CustomIcon from '../../../components/CustomIcon';
import {DIMENSIONS, ROUTE} from '../../../constants';
import {handleNavigator} from '../helpers/handleNavigator';

const SwitchForm = ({type, text, authStyles}) => (
  <TouchableOpacity
    style={authStyles.switchFormWrapper}
    activeOpacity={0.5}
    onPress={() => handleNavigator(type)}>
    {type === ROUTE.registerScreen && (
      <CustomIcon
        name="arrow-left-thin-circle-outline"
        size={DIMENSIONS.iconMedium}
        color={authStyles.switchFormIcon}
      />
    )}
    <Text style={authStyles.switchFormText}>{text}</Text>
    {type === ROUTE.loginScreen && (
      <CustomIcon
        name="arrow-right-thin-circle-outline"
        size={DIMENSIONS.iconMedium}
        color={authStyles.switchFormIcon}
      />
    )}
  </TouchableOpacity>
);

export default SwitchForm;
