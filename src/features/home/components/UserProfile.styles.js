import {StyleSheet} from 'react-native';
import {FONT_SIZE, LAYOUT} from '../../../constants';

export const userProfileStyles = themeColors =>
  StyleSheet.create({
    profileContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: LAYOUT.marginVerticalMedium,
    },
    userInfo: {
      flex: 1,
      marginLeft: LAYOUT.marginHorizontalSmall,
    },
    username: {
      ...FONT_SIZE.textLarge,
      fontWeight: 'bold',
      letterSpacing: 1.01,
      maxWidth: '90%',
    },
    email: {
      ...FONT_SIZE.textSmall,
      maxWidth: '80%',
    },
  });
