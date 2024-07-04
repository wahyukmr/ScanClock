import {StyleSheet} from 'react-native';
import {DIMENSIONS, FONT_SIZE, LAYOUT, SHADOWS} from '../../constants';

export const homeStyles = themeColors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColors.bg100,
    },
    dayContainer: {
      width: '22%',
      margin: '1.5%',
      padding: LAYOUT.paddingSmall,
      borderRadius: DIMENSIONS.borderRadiusMedium,
      alignItems: 'center',
      shadowColor: themeColors.text200,
      elevation: SHADOWS.shadowMedium,
    },
    present: {
      backgroundColor: themeColors.primary200,
    },
    alpha: {
      backgroundColor: themeColors.bg200,
    },
    dayText: {
      width: '100%',
      ...FONT_SIZE.textBase,
      fontWeight: '600',
      color: themeColors.accent100,
      backgroundColor: themeColors.bg300,
      borderRadius: DIMENSIONS.borderRadiusSmall,
      padding: LAYOUT.paddingXSmall,
      textShadowRadius: 1,
      textShadowOffset: {width: 0.3, height: 0.3},
      textShadowColor: themeColors.accent100,
      shadowColor: themeColors.text100,
      elevation: SHADOWS.shadowSmall,
    },
    timeText: {
      ...FONT_SIZE.textXSmall,
      fontWeight: '500',
      color: themeColors.bg200,
      marginTop: LAYOUT.elementSpacingXSmall,
    },
    statusText: {
      ...FONT_SIZE.textBase,
      fontWeight: '600',
      letterSpacing: 0.7,
      textShadowRadius: 1,
      textShadowOffset: {width: 0.3, height: 0.3},
      marginTop: LAYOUT.elementSpacingSmall,
    },
    statusTextPresent: {
      color: themeColors.primary300,
      textShadowColor: themeColors.primary300,
    },
    statusTextAlpha: {
      color: themeColors.accent200,
      textShadowColor: themeColors.accent200,
    },
  });
