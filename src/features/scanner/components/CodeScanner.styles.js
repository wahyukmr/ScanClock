import {StyleSheet} from 'react-native';
import {DIMENSIONS, LAYOUT} from '../../../constants';

export const codeScannerStyles = themeColors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColors.bg100,
    },
    button: {
      padding: DIMENSIONS.iconPadding,
      borderRadius: DIMENSIONS.borderRadius3xl / 2,
      backgroundColor: themeColors.overlay,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightButtonRow: {
      position: 'absolute',
    },
    modalContainer: {
      position: 'absolute',
      paddingVertical: LAYOUT.paddingVerticalXLarge,
      paddingHorizontal: LAYOUT.paddingHorizontalXLarge,
      borderRadius: DIMENSIONS.borderRadiusXLarge,
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: themeColors.bg300,
    },
  });
