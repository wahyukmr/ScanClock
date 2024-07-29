import {StyleSheet} from 'react-native';
import {DIMENSIONS, FONT_SIZE, LAYOUT, SHADOWS} from '../../../constants';

export const scanButtonStyles = themeColors =>
  StyleSheet.create({
    button: {
      height: DIMENSIONS.buttonHeight,
      borderRadius: DIMENSIONS.buttonHeight / 2,
      elevation: SHADOWS.shadowMedium,
      shadowColor: themeColors.accent200,
      justifyContent: 'center',
      paddingHorizontal: LAYOUT.paddingHorizontal3x1,
      marginTop: LAYOUT.marginVerticalMedium,
      backgroundColor: themeColors.primary100,
    },
    buttonContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    buttonText: {
      ...FONT_SIZE.textLarge,
      fontWeight: 'bold',
      color: themeColors.bg200,
      textShadowRadius: 1,
      textShadowOffset: {width: 0.15, height: 0.15},
      textShadowColor: themeColors.bg200,
    },
  });
