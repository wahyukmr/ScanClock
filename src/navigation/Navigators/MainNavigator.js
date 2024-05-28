/**
 * @fileoverview This file sets up the bottom tab navigator using React Navigation and Lottie for animated icons.
 */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Lottie from 'lottie-react-native';
import React from 'react';
import {LOTTIE_FILE_PATHS, MAIN_SCREENS, ROUTE} from '../../constants';
import {useGlobalStyles, useThemedStyles} from '../../hooks';
import {tabBarStyles} from '../../styles';
import AnimatedTabBar from '../AnimatedTabBar';

const Tab = createBottomTabNavigator();

/**
 * MainNavigator component that sets up the bottom tab navigator.
 * @returns {React.Component} Them main navigator component with configured tabs.
 */
const MainNavigator = () => {
  const globalStyles = useGlobalStyles();
  const styles = useThemedStyles(tabBarStyles);

  return (
    <Tab.Navigator
      tabBar={props => (
        <AnimatedTabBar
          {...props}
          tabBarStyles={styles}
          globalStyles={globalStyles}
        />
      )}>
      {[ROUTE.homeScreen, ROUTE.scanScreen, ROUTE.settingScreen].map(name => (
        <Tab.Screen
          key={name}
          name={name}
          options={{
            tabBarIcon: ({ref}) => (
              <Lottie
                ref={ref}
                loop={false}
                source={LOTTIE_FILE_PATHS[name]}
                style={styles.icon}
              />
            ),
            headerShown: false,
          }}
          component={MAIN_SCREENS[name]}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MainNavigator;
