import {StyleSheet} from 'react-native';
import {DIMENSIONS, FONT_SIZE, LAYOUT, SHADOWS} from '../../../constants';

export const btnActionStyles = themeColors =>
  StyleSheet.create({
    btnForm: {
      width: DIMENSIONS.buttonWidth,
      height: DIMENSIONS.buttonHeight,
      marginTop: LAYOUT.marginXLarge,
      backgroundColor: themeColors.primary100,
      borderRadius: DIMENSIONS.borderRadiusMedium,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      elevation: SHADOWS.shadowMedium,
      shadowColor: themeColors.accent200,
      overflow: 'hidden',
    },
    btnFormDisabled: {
      backgroundColor: themeColors.bg300,
      color: themeColors.accent200,
    },
    btnFormText: {
      fontSize: FONT_SIZE.text2xl,
      fontWeight: '500',
      color: themeColors.bg100,
    },
  });
