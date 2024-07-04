import {StyleSheet} from 'react-native';
import {DIMENSIONS, FONT_SIZE, LAYOUT, SHADOWS} from '../../../constants';

export const submitButtonStyles = themeColors =>
  StyleSheet.create({
    submitBtn: {
      width: DIMENSIONS.buttonWidth,
      height: DIMENSIONS.buttonHeight,
      marginTop: LAYOUT.marginXLarge,
      backgroundColor: themeColors.primary100,
      borderRadius: DIMENSIONS.borderRadiusMedium,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      elevation: SHADOWS.shadowMedium,
      shadowColor: themeColors.primary300,
      overflow: 'hidden',
    },
    submitBtnDisabled: {
      backgroundColor: themeColors.bg300,
      color: themeColors.accent200,
    },
    submitBtnText: {
      ...FONT_SIZE.text2xl,
      fontWeight: '500',
      color: themeColors.bg100,
    },
  });
