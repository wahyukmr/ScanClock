import {StyleSheet} from 'react-native';
import {FONT_SIZE, LAYOUT} from '../../../constants';

export const themeContentOptionStyles = themeColors =>
  StyleSheet.create({
    modalOption: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: LAYOUT.gapHorizontalMedium,
      paddingVertical: LAYOUT.elementSpacingVerticalSmall,
    },
    modalOptionText: {
      ...FONT_SIZE.textBase,
      color: themeColors.text100,
    },
  });
