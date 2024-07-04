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
    switchFormText: {
      ...FONT_SIZE.textSmall,
      color: themeColors.accent200,
      marginHorizontal: LAYOUT.marginXSmall,
      borderBottomWidth: 1,
      borderBottomColor: themeColors.accent200,
    },
    actionText: {
      fontWeight: 'bold',
    },
  });
