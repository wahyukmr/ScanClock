import {StyleSheet} from 'react-native';

export const customIconStyles = themeColors =>
  StyleSheet.create({
    iconPrimary: themeColors.text200,
    iconSecondary: themeColors.accent200,
  });
