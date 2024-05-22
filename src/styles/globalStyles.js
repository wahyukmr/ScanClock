import {StyleSheet} from 'react-native';

export const globalStyles = themeColors =>
  StyleSheet.create({
    statusBarColor: themeColors.bg100,
    backgroundColor: themeColors.bg100,
  });
