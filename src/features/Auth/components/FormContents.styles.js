import {StyleSheet} from 'react-native';
import {FONT_SIZE, LAYOUT} from '../../../constants';

export const formContentsStyles = themeColors =>
  StyleSheet.create({
    header: {
      fontSize: FONT_SIZE.text4xl,
      fontWeight: '600',
      color: themeColors.text100,
      textAlign: 'center',
      marginBottom: LAYOUT.marginXLarge + LAYOUT.marginSmall,
    },
  });
