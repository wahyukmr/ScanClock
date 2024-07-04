import {StyleSheet} from 'react-native';
import {FONT_SIZE, LAYOUT} from '../../constants';

export const authScreenStyles = themeColors =>
  StyleSheet.create({
    formContainer: {
      paddingVertical: LAYOUT.paddingXLarge + LAYOUT.paddingLarge,
      paddingHorizontal: LAYOUT.screenPadding,
    },
    formHeader: {
      ...FONT_SIZE.text4xl,
      fontWeight: '600',
      color: themeColors.text100,
      textAlign: 'center',
      marginBottom: LAYOUT.marginXLarge + LAYOUT.marginSmall,
    },
  });
