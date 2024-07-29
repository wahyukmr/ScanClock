import {StyleSheet} from 'react-native';

export const settingScreenStyles = themeColors =>
  StyleSheet.create({
    themeContainer: {
      flex: 1,
      backgroundColor: themeColors.bg100,
    },
  });
