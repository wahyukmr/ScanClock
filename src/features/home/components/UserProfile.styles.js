import {StyleSheet} from 'react-native';
import {DIMENSIONS, FONT_SIZE, LAYOUT} from '../../../constants';

export const userProfileStyles = themeColors =>
  StyleSheet.create({
    profileContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: LAYOUT.paddingSmall,
      borderRadius: DIMENSIONS.borderRadiusXLarge,
      backgroundColor: themeColors.bg200,
    },
    userInfo: {
      flex: 1,
      marginLeft: LAYOUT.marginSmall,
    },
    username: {
      ...FONT_SIZE.textLarge,
      fontWeight: '500',
      color: themeColors.text100,
      maxWidth: '90%',
    },
    email: {
      ...FONT_SIZE.textSmall,
      color: themeColors.accent200,
      maxWidth: '80%',
    },
  });
