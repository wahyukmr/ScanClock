import {useEffect, useRef} from 'react';
import {Pressable} from 'react-native';
import Animated from 'react-native-reanimated';
import {useCustomTabBarItemAnimations} from './CustomTabBarItem.animations';

/**
 * TabBarItem component that renders each tab button in the tab bar.
 * @param {object} props - The props passed to the TabBarItem.
 * @param {boolean} props.active - Indicates if the tab is active.
 * @param {object} props.options - The options for the tab.
 * @param {function} props.onLayout - The function to handle layout changes.
 * @param {function} props.onPress - The function to handle press events.
 * @returns {React.Component} The tab bar button component.
 */

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const CustomTabBarItem = ({
  active,
  options,
  onLayout,
  onPress,
  tabBarStyles,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (active && ref.current) {
      ref.current.play();
    }
  }, [active]);

  const {
    animatedComponentCircleStyles,
    animatedComponentStyles,
    animatedIconContainerStyles,
  } = useCustomTabBarItemAnimations(active);

  return (
    <AnimatedPressable
      onPress={onPress}
      onLayout={onLayout}
      style={[tabBarStyles.component, animatedComponentStyles]}>
      <Animated.View
        style={[tabBarStyles.componentCircle, animatedComponentCircleStyles]}
      />
      <Animated.View
        style={[tabBarStyles.iconContainer, animatedIconContainerStyles]}>
        {options.tabBarIcon && options.tabBarIcon({ref})}
      </Animated.View>
    </AnimatedPressable>
  );
};

export default CustomTabBarItem;
