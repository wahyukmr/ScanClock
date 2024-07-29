import {StyleSheet} from 'react-native';
import {DIMENSIONS, FONT_SIZE, LAYOUT, SHADOWS} from '../../../constants';

export const cameraPermissionModalStyles = themeColors =>
  StyleSheet.create({
    modalContent: {
      width: DIMENSIONS.modalWidth,
      backgroundColor: themeColors.bg200,
      borderRadius: DIMENSIONS.borderRadius2xl,
      padding: LAYOUT.screenPadding,
      shadowColor: themeColors.text100,
      elevation: SHADOWS.shadowMedium,
    },
    modalTitle: {
      ...FONT_SIZE.text2xl,
      color: themeColors.text100,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: LAYOUT.paddingVerticalMedium,
      marginBottom: LAYOUT.marginVerticalLarge,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: themeColors.accent200,
    },
    modalMessage: {
      ...FONT_SIZE.textLarge,
      color: themeColors.text200,
      marginBottom: LAYOUT.marginVerticalXLarge,
    },
    modalActions: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      columnGap: LAYOUT.gapHorizontalSmall,
    },
  });
