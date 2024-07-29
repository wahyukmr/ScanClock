import {StyleSheet} from 'react-native';
import {DIMENSIONS, FONT_SIZE, LAYOUT} from '../../../constants';

export const InputFieldStyles = themeColors =>
  StyleSheet.create({
    textInput: {
      flex: 1,
      height: DIMENSIONS.inputHeight,
      ...FONT_SIZE.textBase,
      color: themeColors.text100,
      paddingHorizontal: LAYOUT.paddingHorizontalMedium,
    },
  });
