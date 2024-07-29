import {StyleSheet} from 'react-native';
import {FONT_SIZE, LAYOUT} from '../../constants';

export const authScreenStyles = themeColors =>
  StyleSheet.create({
    formContainer: {
      paddingTop: LAYOUT.paddingVerticalXLarge,
      paddingBottom: LAYOUT.paddingVertical3x1,
      paddingHorizontal: LAYOUT.screenPadding,
    },
    formHeader: {
      ...FONT_SIZE.text4xl,
      fontWeight: '600',
      color: themeColors.text100,
      textAlign: 'center',
      marginBottom: LAYOUT.marginVertical2x1,
    },
  });
