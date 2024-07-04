import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {CustomIcon} from '../../../components';
import {DIMENSIONS} from '../../../constants';
import {topHeaderStyles} from './TopHeader.styles';

const TopHeader = ({themeColors}) => {
  const styles = topHeaderStyles(themeColors);

  return (
    <View style={styles.topHeaderContainer}>
      <Text style={styles.welcomeText}>Selamat datang,</Text>
      <TouchableHighlight
        onPress={() => console.log('notif')}
        underlayColor={themeColors.bg200}
        style={styles.btnNotification}>
        <CustomIcon
          name="bell"
          size={DIMENSIONS.iconMedium}
          color={themeColors.accent100}
        />
      </TouchableHighlight>
    </View>
  );
};

export default TopHeader;
