import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const useScanButtonAnimation = () => {
  const scale = useSharedValue(1);

  const onPressIn = () => (scale.value = withSpring(0.9));

  const onPressOut = () => (scale.value = withSpring(1));

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  return {animatedStyle, onPressIn, onPressOut};
};

export default useScanButtonAnimation;
