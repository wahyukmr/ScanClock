import {StyleSheet} from 'react-native';
import {DIMENSIONS, FONT_SIZE, LAYOUT} from '../constants';

export const modalActionBtnStyles = themeColors =>
  StyleSheet.create({
    modalActionWrapper: {
      paddingVertical: LAYOUT.paddingVerticalSmall,
      paddingHorizontal: LAYOUT.paddingHorizontalMedium,
      borderRadius: DIMENSIONS.borderRadius2xl,
    },
    modalActionText: {
      ...FONT_SIZE.textSmall,
      fontWeight: '600',
      color: themeColors.primary200,
    },
  });
