import {StyleSheet} from 'react-native';
import {FONT_SIZE, LAYOUT} from '../constants';

export const customLoadingStyles = themeColors =>
  StyleSheet.create({
    loadingIndicator: {
      alignItems: 'center',
      marginBottom: LAYOUT.marginVerticalLarge,
    },
    textMessage: {
      ...FONT_SIZE.textLarge,
      color: themeColors.text200,
      textAlign: 'center',
    },
  });
