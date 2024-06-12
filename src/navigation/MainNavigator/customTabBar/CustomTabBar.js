import {useState} from 'react';
import {View} from 'react-native';
import {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import {useThemeContext} from '../../../hooks/useThemeContext';
import {navigate} from '../../NavigationServices';
import CustomTabBarAnimation from './CustomTabBar.animations';
import {customTabBarStyles} from './CustomTabBar.styles';
import CustomTabBarItem from './CustomTabBarItem';

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
const CustomTabBar = ({state: {index: activeIndex, routes}, descriptors}) => {
  const [layout, setLayout] = useState({});
  const {styles} = useThemeContext(customTabBarStyles);

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
    transform: [{translateX: withTiming(xOffset.value, {duration: 200})}],
  }));

  return (
    <View style={[styles.customTabBar]}>
      <CustomTabBarAnimation
        tabBarStyles={styles}
        animatedStyles={animatedStyles}
      />
      <View style={styles.tabBarContainer}>
        {routes.map((route, index) => {
          const {options} = descriptors[route.key];
          return (
            <CustomTabBarItem
              key={route.key}
              active={index === activeIndex}
              options={options}
              tabBarStyles={styles}
              onLayout={e => handleLayout(e, index)}
              onPress={() => navigate(route.name)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default CustomTabBar;
