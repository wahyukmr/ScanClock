import {StyleSheet} from 'react-native';
import {DIMENSIONS, FONT_SIZE, LAYOUT, SHADOWS} from '../../../constants';

export const monthPickerModalStyles = themeColors =>
  StyleSheet.create({
    modalContainer: {
      width: '90%',
      backgroundColor: themeColors.bg200,
      borderRadius: DIMENSIONS.borderRadiusXLarge,
      padding: LAYOUT.paddingSmall,
      shadowColor: themeColors.text100,
      elevation: SHADOWS.shadowSmall,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: LAYOUT.paddingMedium,
      paddingBottom: LAYOUT.paddingSmall,
    },
    headerText: {
      ...FONT_SIZE.textLarge,
      fontWeight: '500',
      letterSpacing: 1.01,
      color: themeColors.text200,
    },
    btnCloseIcon: {
      padding: LAYOUT.paddingSmall,
      borderRadius:
        DIMENSIONS.borderRadius2xl + DIMENSIONS.borderRadiusSmall / 2,
    },
    content: {
      marginTop: LAYOUT.marginXSmall,
      marginBottom: LAYOUT.marginSmall,
    },
    monthButton: {
      padding: LAYOUT.paddingMedium,
      backgroundColor: themeColors.bg300,
      borderRadius: DIMENSIONS.borderRadiusMedium,
      marginVertical: LAYOUT.marginXSmall,
      marginHorizontal: LAYOUT.marginMedium,
      marginBottom: LAYOUT.marginSmall,
      shadowColor: themeColors.text100,
      elevation: SHADOWS.shadowSmall,
    },
    monthText: {
      ...FONT_SIZE.textBase,
      fontWeight: '600',
      color: themeColors.text100,
    },
  });
