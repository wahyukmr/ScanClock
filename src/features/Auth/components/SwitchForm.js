import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {CustomIcon} from '../../../components';
import {DIMENSIONS} from '../../../constants';
import {handleNavigator} from '../Auth.helpers';
import {switchFormStyles} from './SwitchForm.styles';

const SwitchForm = ({isLoginType, themeColors}) => {
  const styles = switchFormStyles(themeColors);

  return (
    <TouchableOpacity
      style={styles.switchFormWrapper}
      activeOpacity={0.7}
      onPress={() => handleNavigator(isLoginType)}>
      {!isLoginType && (
        <CustomIcon
          name="arrow-left-thin"
          size={DIMENSIONS.iconMedium}
          color={themeColors.accent200}
        />
      )}
      <Text style={styles.switchFormText}>
        {isLoginType ? (
          <>
            Tidak punya akun? <Text style={styles.actionText}>Register</Text>
          </>
        ) : (
          <>
            Kembali ke <Text style={styles.actionText}>Login</Text>
          </>
        )}
      </Text>
      {isLoginType && (
        <CustomIcon
          name="arrow-right-thin"
          size={DIMENSIONS.iconMedium}
          color={themeColors.accent200}
        />
      )}
    </TouchableOpacity>
  );
};

export default SwitchForm;
