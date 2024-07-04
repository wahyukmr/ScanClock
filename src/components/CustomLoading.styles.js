import {StyleSheet} from 'react-native';
import {FONT_SIZE, LAYOUT} from '../constants';

export const customLoadingStyles = themeColors =>
  StyleSheet.create({
    modalContainer: {
      width: '80%',
      backgroundColor: themeColors.bg200,
      borderRadius: DIMENSIONS.borderRadiusXLarge,
      padding: LAYOUT.paddingSmall,
      shadowColor: themeColors.text100,
      elevation: SHADOWS.shadowSmall,
    },
    loadingIndicator: {
      alignItems: 'center',
      marginBottom: LAYOUT.marginLarge,
    },
    loadingMessage: {
      ...FONT_SIZE.textBase,
      color: themeColors.text100,
      textAlign: 'center',
    },
  });
