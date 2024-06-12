import {StyleSheet} from 'react-native';

const customModalStyles = themeColors =>
  StyleSheet.create({
    modalAlignment: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: themeColors.overlay,
    },
  });

export default customModalStyles;
