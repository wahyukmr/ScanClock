import {StyleSheet} from 'react-native';
import {FONT_SIZE, LAYOUT} from '../../../constants';

export const themeModalOptionStyles = themeColors =>
  StyleSheet.create({
    modalOption: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: LAYOUT.gapMedium,
      paddingVertical: LAYOUT.elementSpacingSmall,
    },
    modalOptionText: {
      ...FONT_SIZE.textBase,
      color: themeColors.text100,
    },
  });
