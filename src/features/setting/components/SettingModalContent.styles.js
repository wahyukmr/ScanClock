import {StyleSheet} from 'react-native';
import {DIMENSIONS, FONT_SIZE, LAYOUT, SHADOWS} from '../../../constants';

export const settingModalContentStyles = themeColors =>
  StyleSheet.create({
    modalContent: {
      width: DIMENSIONS.modalWidth,
      backgroundColor: themeColors.bg200,
      borderRadius: DIMENSIONS.borderRadius2xl,
      shadowColor: themeColors.text100,
      elevation: SHADOWS.shadowMedium,
    },
    modalTitle: {
      ...FONT_SIZE.text2xl,
      color: themeColors.text100,
      textAlign: 'center',
      paddingHorizontal: LAYOUT.paddingHorizontalLarge,
      paddingTop: LAYOUT.paddingVerticalLarge,
      paddingBottom: LAYOUT.paddingVerticalMedium,
    },
    modalActions: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      columnGap: LAYOUT.gapHorizontalSmall,
      padding: LAYOUT.screenPadding,
    },
  });
