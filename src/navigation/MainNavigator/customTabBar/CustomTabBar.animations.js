import React from 'react';
import Animated from 'react-native-reanimated';
import {Path, Svg} from 'react-native-svg';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const CustomTabBarAnimation = ({tabBarStyles, animatedStyles}) => (
  <AnimatedSvg
    width={110}
    height={60}
    viewBox="0 0 110 60"
    style={[{position: 'absolute'}, animatedStyles]}>
    <Path
      fill={tabBarStyles.backgroundColorSvg}
      d="M20 0H0c11.046 0 20 8.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
    />
  </AnimatedSvg>
);

export default CustomTabBarAnimation;
