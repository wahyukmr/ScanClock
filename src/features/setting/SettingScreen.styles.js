import {StyleSheet} from 'react-native';
import {FONT_SIZE, LAYOUT} from '../../constants';

export const settingScreenStyles = themeColors =>
  StyleSheet.create({
    themeContainer: {
      flex: 1,
      backgroundColor: themeColors.bg100,
    },
    title: {
      ...FONT_SIZE.textSmall,
      fontWeight: '500',
      color: themeColors.accent100,
      paddingHorizontal: LAYOUT.screenPadding,
    },
  });
