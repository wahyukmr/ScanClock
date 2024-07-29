import {StyleSheet} from 'react-native';
import {FONT_SIZE, LAYOUT} from '../../../constants';

export const fieldContainerStyles = themeColors =>
  StyleSheet.create({
    formFieldWrapper: {
      marginBottom: LAYOUT.marginVerticalLarge,
      paddingBottom: LAYOUT.paddingVerticalLarge,
    },
    label: {
      ...FONT_SIZE.textLarge,
      fontWeight: '600',
      color: themeColors.text200,
    },
    baseField: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      paddingLeft: LAYOUT.paddingHorizontalSmall,
      borderBottomColor: themeColors.primary200,
    },
    errorText: {
      ...FONT_SIZE.textSmall,
      color: themeColors.error,
      position: 'absolute',
      bottom: 3,
      left: 0,
    },
  });
