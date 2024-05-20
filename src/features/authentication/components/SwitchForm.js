import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ROUTE} from '../../../constants';
import {useThemedStyles} from '../../../hooks';
import {inputFieldStyles} from '../../../styles';
import {handleNavigator} from '../helpers/handleNavigator';
import FormIcon from './FormIcon';

const SwitchForm = ({type, text}) => {
  const styles = useThemedStyles(inputFieldStyles);

  return (
    <TouchableOpacity
      style={styles.switchFormWrapper}
      activeOpacity={0.5}
      onPress={() => handleNavigator(type)}>
      {type === ROUTE.REGISTER_SCREEN && (
        <FormIcon
          icon="arrow-left-thin-circle-outline"
          color={styles.switchFormIcon}
        />
      )}
      <Text style={styles.switchFormText}>{text}</Text>
      {type === ROUTE.LOGIN_SCREEN && (
        <FormIcon
          icon="arrow-right-thin-circle-outline"
          color={styles.switchFormIcon}
        />
      )}
    </TouchableOpacity>
  );
};

export default SwitchForm;
