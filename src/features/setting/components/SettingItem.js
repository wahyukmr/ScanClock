import React from 'react';
import {Text, View} from 'react-native';
import {CustomIcon} from '../../../components';
import {DIMENSIONS} from '../../../constants';
import {settingItemStyles} from './SettingItem.styles';

const SettingItem = ({themeColors, icon, label, value}) => {
  const styles = settingItemStyles(themeColors);

  return (
    <View style={styles.btnContentWrapper}>
      <CustomIcon
        name={icon}
        size={DIMENSIONS.iconMedium}
        color={themeColors.accent200}
      />
      <View>
        <Text style={styles.btnContentLabel}>{label}</Text>
        {value && <Text style={styles.btnContentValue}>{value}</Text>}
      </View>
    </View>
  );
};

export default SettingItem;
