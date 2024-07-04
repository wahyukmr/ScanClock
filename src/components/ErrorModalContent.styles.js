import {StyleSheet} from 'react-native';
import {DIMENSIONS, FONT_SIZE, LAYOUT, SHADOWS} from '../constants';

export const errorModalContentStyles = themeColors =>
  StyleSheet.create({
    modalContent: {
      width: '85%',
      backgroundColor: themeColors.bg200,
      borderRadius: DIMENSIONS.borderRadius2xl,
      padding: LAYOUT.screenPadding,
      shadowColor: themeColors.text100,
      elevation: SHADOWS.shadowMedium,
    },
    lottie: {
      alignSelf: 'center',
      width: DIMENSIONS.windowWidth / 2.5,
      height: DIMENSIONS.windowWidth / 2.5,
      marginBottom: LAYOUT.marginLarge,
    },
    modalTitle: {
      ...FONT_SIZE.text2xl,
      color: themeColors.text100,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: LAYOUT.marginMedium,
    },
    errorMessage: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: LAYOUT.marginXSmall,
    },
    errorText: {
      ...FONT_SIZE.textBase,
      color: themeColors.text200,
      marginLeft: LAYOUT.elementSpacingSmall,
    },
    modalActions: {
      alignItems: 'flex-end',
      marginTop: LAYOUT.marginXLarge + LAYOUT.marginSmall,
    },
  });
