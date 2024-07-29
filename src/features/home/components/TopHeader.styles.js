import {StyleSheet} from 'react-native';
import {DIMENSIONS, FONT_SIZE} from '../../../constants';

export const topHeaderStyles = themeColors =>
  StyleSheet.create({
    topHeaderContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    welcomeText: {
      ...FONT_SIZE.textSmall,
      color: themeColors.primary300,
      fontWeight: '500',
    },
    btnNotification: {
      padding: DIMENSIONS.iconPadding,
      borderRadius: DIMENSIONS.borderRadius3xl / 2,
    },
  });
