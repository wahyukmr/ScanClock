import {StyleSheet} from 'react-native';
import {FONT_SIZE, LAYOUT} from '../../../constants';

export const ThemeSettingStyles = themeColors =>
  StyleSheet.create({
    btnContentWrapper: {
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: LAYOUT.gapLarge,
      paddingVertical: LAYOUT.paddingMedium,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: themeColors.bg300,
    },
    btnContentLabel: {
      ...FONT_SIZE.textBase,
      color: themeColors.text100,
    },
    btnContentValue: {
      ...FONT_SIZE.textSmall,
      color: themeColors.accent200,
    },
  });
