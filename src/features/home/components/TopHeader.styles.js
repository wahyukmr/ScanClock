import {StyleSheet} from 'react-native';
import {FONT_SIZE, LAYOUT} from '../../../constants';

export const topHeaderStyles = themeColors =>
  StyleSheet.create({
    topHeaderContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: LAYOUT.marginSmall,
    },
    welcomeText: {
      ...FONT_SIZE.textXLarge,
      letterSpacing: 1.02,
      color: themeColors.accent200,
      fontWeight: '700',
    },
    btnNotification: {
      borderRadius: 48 / 2,
      padding: LAYOUT.paddingSmall,
    },
  });
