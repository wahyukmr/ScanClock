import {StyleSheet} from 'react-native';
import {DIMENSIONS, FONT_SIZE, LAYOUT} from '../../../constants';

export const monthNavigationStyles = themeColors =>
  StyleSheet.create({
    monthNavigationContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: LAYOUT.paddingSmall,
      marginBottom: LAYOUT.marginSmall,
    },
    monthIcon: {
      borderRadius: 48 / 2,
      padding: LAYOUT.paddingSmall,
    },
    monthNavigation: {
      flexBasis: '50%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    arrowButton: {
      borderRadius: DIMENSIONS.borderRadius2xl / 2,
      backgroundColor: themeColors.accent100,
    },
    monthWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    month: {
      ...FONT_SIZE.textLarge,
      fontWeight: 'bold',
      color: themeColors.text200,
    },
    year: {
      ...FONT_SIZE.textXSmall,
      color: themeColors.accent200,
    },
  });
