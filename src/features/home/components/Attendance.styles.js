import {StyleSheet} from 'react-native';
import {DIMENSIONS, FONT_SIZE, LAYOUT} from '../../../constants';

export const attendanceStyles = themeColors =>
  StyleSheet.create({
    attendance: {
      height: DIMENSIONS.cardHeight,
      marginTop: -DIMENSIONS.cardHeight / 2,
      borderRadius: DIMENSIONS.borderRadiusXLarge,
      backgroundColor: themeColors.bg300,
    },
    attendanceText: {
      ...FONT_SIZE.textBase,
      color: themeColors.accent200,
      fontWeight: '500',
      paddingVertical: LAYOUT.paddingVerticalSmall,
      paddingHorizontal: LAYOUT.paddingHorizontalMedium,
      marginBottom: LAYOUT.marginVerticalSmall,
    },
    attendanceWrapper: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    attendanceItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    iconWrapper: {
      borderRadius: DIMENSIONS.borderRadiusLarge,
      paddingVertical: LAYOUT.paddingVerticalSmall,
      paddingHorizontal: LAYOUT.paddingHorizontalSmall,
      marginRight: LAYOUT.gapHorizontalMedium,
    },
    label: {
      ...FONT_SIZE.textBase,
      fontWeight: '700',
    },
    timeText: {
      ...FONT_SIZE.textLarge,
      fontWeight: '900',
    },
  });
