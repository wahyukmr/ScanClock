import {StyleSheet} from 'react-native';
import {FONT_SIZE, LAYOUT} from '../../../constants';

export const switchFormStyles = themeColors =>
  StyleSheet.create({
    switchFormWrapper: {
      marginTop: LAYOUT.marginVerticalXLarge,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    switchFormText: {
      ...FONT_SIZE.textSmall,
      color: themeColors.accent200,
      marginHorizontal: LAYOUT.marginHorizontalXSmall,
      borderBottomWidth: 1,
      borderBottomColor: themeColors.accent200,
    },
    actionText: {
      fontWeight: 'bold',
    },
  });
