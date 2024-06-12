import {useAnimatedStyle, withTiming} from 'react-native-reanimated';

export const useCustomTabBarItemAnimations = active => {
  const animatedComponentStyles = useAnimatedStyle(() => ({
    marginTop: withTiming(active ? -5 : 0, {duration: 200}),
  }));

  const animatedComponentCircleStyles = useAnimatedStyle(() => ({
    transform: [{scale: withTiming(active ? 1 : 0, {duration: 200})}],
  }));

  const animatedIconContainerStyles = useAnimatedStyle(() => ({
    opacity: withTiming(active ? 1 : 0.7, {duration: 200}),
  }));

  return {
    animatedComponentStyles,
    animatedComponentCircleStyles,
    animatedIconContainerStyles,
  };
};
