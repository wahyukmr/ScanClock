import {StyleSheet} from 'react-native';
import {FONT_SIZE, LAYOUT} from '../../../constants';

export const switchFormStyles = themeColors =>
  StyleSheet.create({
    switchFormWrapper: {
      marginTop: LAYOUT.marginXLarge,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    // switchFormIcon: themeColors.accent200,
    switchFormText: {
      fontSize: FONT_SIZE.textSmall,
      fontWeight: '500',
      color: themeColors.accent200,
      marginHorizontal: LAYOUT.marginSmall,
      borderBottomWidth: 1,
      borderBottomColor: themeColors.accent200,
    },
  });
