import {StyleSheet} from 'react-native';
import {DIMENSIONS, FONT_SIZE, LAYOUT, SHADOWS} from '../../../constants';

export const monthPickerModalStyles = themeColors =>
  StyleSheet.create({
    modalContainer: {
      width: DIMENSIONS.modalWidth,
      backgroundColor: themeColors.bg200,
      borderRadius: DIMENSIONS.borderRadiusXLarge,
      paddingVertical: LAYOUT.paddingVerticalSmall,
      paddingHorizontal: LAYOUT.paddingHorizontalSmall,
      shadowColor: themeColors.text100,
      elevation: SHADOWS.shadowSmall,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: LAYOUT.paddingHorizontalMedium,
      paddingTop: LAYOUT.paddingVerticalMedium,
      paddingBottom: LAYOUT.paddingVerticalSmall,
    },
    headerText: {
      ...FONT_SIZE.textLarge,
      fontWeight: '500',
      letterSpacing: 1.01,
      color: themeColors.text200,
    },
    btnCloseIcon: {
      padding: DIMENSIONS.iconPadding,
      borderRadius: DIMENSIONS.borderRadius3xl / 2,
    },
    content: {
      marginTop: LAYOUT.marginVerticalXSmall,
      marginBottom: LAYOUT.marginVerticalSmall,
    },
    monthButton: {
      paddingVertical: LAYOUT.paddingVerticalMedium,
      paddingHorizontal: LAYOUT.paddingHorizontalMedium,
      backgroundColor: themeColors.bg300,
      borderRadius: DIMENSIONS.borderRadiusMedium,
      marginVertical: LAYOUT.marginVerticalXSmall,
      marginHorizontal: LAYOUT.marginHorizontalMedium,
      marginBottom: LAYOUT.marginVerticalSmall,
      shadowColor: themeColors.text100,
      elevation: SHADOWS.shadowSmall,
    },
    monthText: {
      ...FONT_SIZE.textBase,
      fontWeight: '600',
      color: themeColors.text100,
    },
  });
