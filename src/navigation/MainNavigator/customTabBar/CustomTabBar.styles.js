import {StyleSheet} from 'react-native';
import {LAYOUT} from '../../../constants';

export const customTabBarStyles = themeColors =>
  StyleSheet.create({
    customTabBar: {
      backgroundColor: themeColors.bg200,
      paddingBottom: LAYOUT.paddingXSmall,
    },
    backgroundColorSvg: themeColors.bg100,
    tabBarContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    component: {
      height: 60,
      width: 60,
    },
    componentCircle: {
      flex: 1,
      borderRadius: 60 / 2,
      backgroundColor: themeColors.bg300,
    },
    iconContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
