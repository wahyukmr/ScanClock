import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import CustomIcon from '../../../components/CustomIcon';
import {DIMENSIONS, ROUTE} from '../../../constants';
import {useThemeContext} from '../../../hooks/useThemeContext';
import {handleNavigator} from '../helpers/handleNavigator';
import {switchFormStyles} from './SwitchForm.styles';

const SwitchForm = ({type, text}) => {
  const {styles, themeColors} = useThemeContext(switchFormStyles);

  return (
    <TouchableOpacity
      style={styles.switchFormWrapper}
      activeOpacity={0.5}
      onPress={() => handleNavigator(type)}>
      {type === ROUTE.registerScreen && (
        <CustomIcon
          name="arrow-left-thin-circle-outline"
          size={DIMENSIONS.iconMedium}
          color={themeColors.accent200}
        />
      )}
      <Text style={styles.switchFormText}>{text}</Text>
      {type === ROUTE.loginScreen && (
        <CustomIcon
          name="arrow-right-thin-circle-outline"
          size={DIMENSIONS.iconMedium}
          color={themeColors.accent200}
        />
      )}
    </TouchableOpacity>
  );
};

export default SwitchForm;
