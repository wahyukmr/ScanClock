import {StyleSheet} from 'react-native';

export const dynamicModalWrapperStyles = themeColors =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      backgroundColor: themeColors.overlay,
    },
  });
