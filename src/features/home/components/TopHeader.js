import React from 'react';
import {Alert, Text, TouchableHighlight, View} from 'react-native';
import {CustomIcon} from '../../../components';
import {DIMENSIONS} from '../../../constants';
import {topHeaderStyles} from './TopHeader.styles';

const TopHeader = ({themeColors}) => {
  const styles = topHeaderStyles(themeColors);

  return (
    <View style={styles.topHeaderContainer}>
      <Text style={styles.welcomeText}>Selamat datang,</Text>
      <TouchableHighlight
        onPress={() =>
          Alert.alert('Notifikasi', 'fitur belum tersedia!', [
            {text: 'OKE', style: 'cancel'},
          ])
        }
        underlayColor={themeColors.primary200}
        style={styles.btnNotification}>
        <CustomIcon
          name="bell"
          size={DIMENSIONS.iconMedium}
          color={themeColors.primary300}
        />
      </TouchableHighlight>
    </View>
  );
};

export default TopHeader;
