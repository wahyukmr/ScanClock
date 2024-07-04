import {StyleSheet} from 'react-native';
import {FONT_SIZE, LAYOUT} from '../../constants';

export const scanStyles = themeColors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColors.bg100,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: LAYOUT.screenPadding,
    },
    description: {
      ...FONT_SIZE.textSmall,
      lineHeight: 20,
      textAlign: 'center',
      marginVertical: LAYOUT.marginLarge,
      color: themeColors.text200,
    },
  });
