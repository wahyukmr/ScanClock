import {StyleSheet} from 'react-native';
import {DIMENSIONS, FONT_SIZE, LAYOUT, SHADOWS} from '../../../constants';

export const themeModalStyles = themeColors =>
  StyleSheet.create({
    modalContent: {
      width: '85%',
      backgroundColor: themeColors.bg200,
      borderRadius: DIMENSIONS.borderRadius2xl,
      shadowColor: themeColors.text100,
      elevation: SHADOWS.shadowMedium,
    },
    modalTitle: {
      ...FONT_SIZE.text2xl,
      color: themeColors.text100,
      paddingHorizontal: LAYOUT.paddingLarge,
      paddingTop: LAYOUT.paddingLarge,
      paddingBottom: LAYOUT.paddingMedium,
    },
    modalActions: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      columnGap: LAYOUT.gapSmall,
      padding: LAYOUT.screenPadding,
    },
  });
