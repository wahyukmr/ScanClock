import {StyleSheet} from 'react-native';
import {FONT_SIZE, LAYOUT} from '../../../constants';

export const textInputFieldStyles = themeColors =>
  StyleSheet.create({
    input: {
      flex: 1,
      fontSize: FONT_SIZE.textBase,
      color: themeColors.text100,
      paddingHorizontal: LAYOUT.paddingMedium,
    },
  });
