import {StyleSheet} from 'react-native';
import {DIMENSIONS, LAYOUT} from '../../../constants';

export const customHeaderStyles = themeColors =>
  StyleSheet.create({
    header: {
      backgroundColor: themeColors.primary100,
      paddingHorizontal: LAYOUT.screenPadding,
      paddingBottom: DIMENSIONS.cardHeight / 2,
      borderBottomStartRadius: DIMENSIONS.borderRadiusXLarge,
      borderBottomEndRadius: DIMENSIONS.borderRadiusXLarge,
    },
  });
