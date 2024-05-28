import {useState} from 'react';
import {View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Path, Svg} from 'react-native-svg';
import TabBarComponent from './TabBarComponent';
import {navigate} from './navigationServices';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

/**
 * AnimatedTabBar component that renders the custom animated tab bar.
 * @param {object} props - The props passed to the AnimatedTabBar component.
 * @param {object} props.state - The navigation state.
 * @param {object} props.state.index - The currently active tab.
 * @param {object} props.state.routes - The list of routes.
 * @param {object} props.navigation - The navigation object to control navigation between tabs.
 * @param {object} props.descriptors - The descriptors object that contains configuration information about each tab.
 * @returns {React.Component} The animated tab bar component.
 */
const AnimatedTabBar = ({
  state: {index: activeIndex, routes},
  descriptors,
  tabBarStyles,
  globalStyles,
}) => {
  const {bottom} = useSafeAreaInsets();
  const [layout, setLayout] = useState({});

  /**
   * Handles layout changes
   * @param {object} event - The layout change event.
   * @param {number} index - The index of the tab.
   */
  const handleLayout = (event, index) => {
    const {x} = event.nativeEvent.layout;
    setLayout(prev => ({...prev, [index]: x}));
  };

  const xOffset = useDerivedValue(() => {
    return layout[activeIndex] - 25 || 0;
  }, [activeIndex, layout]);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: withTiming(xOffset.value, {duration: 250})}],
  }));

  return (
    <View
      style={[
        tabBarStyles.tabBar,
        // {paddingBottom: bottom + LAYOUT.elementSpacingSmall},
      ]}>
      <AnimatedSvg
        width={110}
        height={60}
        viewBox="0 0 110 60"
        style={[tabBarStyles.activeBackground, animatedStyles]}>
        <Path
          fill={globalStyles.backgroundColor}
          d="M20 0H0c11.046 0 20 8.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
        />
      </AnimatedSvg>
      <View style={tabBarStyles.tabBarContainer}>
        {routes.map((route, index) => {
          const {options} = descriptors[route.key];
          return (
            <TabBarComponent
              key={route.key}
              active={index === activeIndex}
              options={options}
              tabBarStyles={tabBarStyles}
              onLayout={e => handleLayout(e, index)}
              onPress={() => navigate(route.name)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default AnimatedTabBar;
