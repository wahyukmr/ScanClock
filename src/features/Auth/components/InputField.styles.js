import {StyleSheet} from 'react-native';
import {FONT_SIZE, LAYOUT} from '../../../constants';

export const InputFieldStyles = themeColors =>
  StyleSheet.create({
    textInput: {
      flex: 1,
      ...FONT_SIZE.textBase,
      color: themeColors.text100,
      paddingHorizontal: LAYOUT.paddingMedium,
    },
  });
