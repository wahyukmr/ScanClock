import {StyleSheet} from 'react-native';
import {DIMENSIONS, LAYOUT} from '../../../constants';

export const codeScannerStyles = themeColors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColors.bg100,
    },
    button: {
      marginBottom: LAYOUT.marginMedium,
      width: DIMENSIONS.controlButton,
      height: DIMENSIONS.controlButton,
      borderRadius: DIMENSIONS.controlButton / 2,
      backgroundColor: themeColors.overlay,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightButtonRow: {
      position: 'absolute',
    },
  });
