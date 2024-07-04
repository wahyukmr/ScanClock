import {StyleSheet} from 'react-native';
import {DIMENSIONS, LAYOUT} from '../../../constants';

export const customHeaderStyles = themeColors =>
  StyleSheet.create({
    header: {
      backgroundColor: themeColors.bg300,
      paddingHorizontal: LAYOUT.paddingMedium,
      paddingBottom: LAYOUT.paddingMedium,
      borderBottomStartRadius: DIMENSIONS.borderRadius2xl,
      borderBottomEndRadius: DIMENSIONS.borderRadius2xl,
      marginBottom: -LAYOUT.marginXLarge,
    },
  });
