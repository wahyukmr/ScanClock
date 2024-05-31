import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export const useBtnPressAnimation = () => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.98, {damping: 15, stiffness: 150});
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, {damping: 15, stiffness: 150});
  };

  return {
    animatedStyle,
    handlePressIn,
    handlePressOut,
  };
};
