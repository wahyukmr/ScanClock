import {StyleSheet} from 'react-native';
import {FONT_SIZE, LAYOUT} from '../../../constants';

export const settingItemStyles = themeColors =>
  StyleSheet.create({
    btnContentWrapper: {
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: LAYOUT.gapHorizontalLarge,
      paddingVertical: LAYOUT.paddingVerticalMedium,
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
