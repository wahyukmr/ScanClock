import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Icon} from '../../../components';
import {DIMENSIONS, ROUTE} from '../../../constants';
import {useThemedStyles} from '../../../hooks';
import {authenticationStyles} from '../../../styles';
import {handleNavigator} from '../helpers/handleNavigator';

const SwitchForm = ({type, text}) => {
  const styles = useThemedStyles(authenticationStyles);

  return (
    <TouchableOpacity
      style={styles.switchFormWrapper}
      activeOpacity={0.5}
      onPress={() => handleNavigator(type)}>
      {type === ROUTE.REGISTER_SCREEN && (
        <Icon
          name="arrow-left-thin-circle-outline"
          size={DIMENSIONS.iconMedium}
          color={styles.switchFormIcon}
        />
      )}
      <Text style={styles.switchFormText}>{text}</Text>
      {type === ROUTE.LOGIN_SCREEN && (
        <Icon
          name="arrow-right-thin-circle-outline"
          size={DIMENSIONS.iconMedium}
          color={styles.switchFormIcon}
        />
      )}
    </TouchableOpacity>
  );
};

export default SwitchForm;
