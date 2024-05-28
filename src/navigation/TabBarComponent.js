import {useEffect, useRef} from 'react';
import {Pressable} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

/**
 * TabBarComponent component that renders each tab button in the tab bar.
 * @param {object} props - The props passed to the TabBarComponent.
 * @param {boolean} props.active - Indicates if the tab is active.
 * @param {object} props.options - The options for the tab.
 * @param {function} props.onLayout - The function to handle layout changes.
 * @param {function} props.onPress - The function to handle press events.
 * @returns {React.Component} The tab bar button component.
 */
const TabBarComponent = ({
  active,
  options,
  onLayout,
  onPress,
  tabBarStyles,
}) => {
  // `ref` adalah referensi ke komponen Lottie untuk mengendalikan animasi.
  const ref = useRef(null);

  // menjalankan animasi Lottie ketika tab menjadi aktif.
  useEffect(() => {
    if (active && ref.current) {
      ref.current.play();
    }
  }, [active]);

  // mendefinisikan gaya animasi untuk lingkaran yang berubah ukuran berdasarkan status aktif.
  const animatedComponentCircleStyles = useAnimatedStyle(() => ({
    transform: [{scale: withTiming(active ? 1 : 0, {duration: 250})}],
  }));

  // mendefinisikan gaya animasi untuk ikon yang mengubah opasitas berdasarkan status aktif.
  const animatedIconContainerStyles = useAnimatedStyle(() => ({
    opacity: withTiming(active ? 1 : 0.5, {duration: 250}),
  }));

  return (
    <Pressable
      onPress={onPress}
      onLayout={onLayout}
      style={tabBarStyles.component}>
      <Animated.View
        style={[tabBarStyles.componentCircle, animatedComponentCircleStyles]}
      />
      <Animated.View
        style={[tabBarStyles.iconContainer, animatedIconContainerStyles]}>
        {options.tabBarIcon && options.tabBarIcon({ref})}
      </Animated.View>
    </Pressable>
  );
};

export default TabBarComponent;
