import {StyleSheet} from 'react-native';
import {DIMENSIONS, FONT_SIZE, LAYOUT, SHADOWS} from '../../../constants';

export const cameraPermissionModalStyles = themeColors =>
  StyleSheet.create({
    modalContent: {
      width: '85%',
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
      paddingBottom: LAYOUT.paddingMedium,
      marginBottom: LAYOUT.marginLarge,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: themeColors.accent200,
    },
    modalMessage: {
      ...FONT_SIZE.textLarge,
      color: themeColors.text200,
      marginBottom: LAYOUT.marginXLarge,
    },
    modalActions: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      columnGap: LAYOUT.gapSmall,
    },
  });