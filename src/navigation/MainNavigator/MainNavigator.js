/**
 * @fileoverview This file sets up the bottom tab navigator using React Navigation and Lottie for animated icons.
 */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {LOTTIE_FILE_PATHS, MAIN_SCREENS, ROUTE} from '../../constants';
import {useHeaderHeight} from '../../contexts/HeaderHeightContext';
import {CustomHeader} from '../../features/home/components';
import {useThemeContext} from '../../hooks/useThemeContext';
import CustomLottie from './customTabBar/CustomLottie';
import CustomTabBar from './customTabBar/CustomTabBar';

const Tab = createBottomTabNavigator();

/**
 * MainNavigator component that sets up the bottom tab navigator.
 * @returns {React.Component} Them main navigator component with configured tabs.
 */
const MainNavigator = () => {
  const {themeColors, isDark} = useThemeContext();

  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name={ROUTE.homeScreen}
        component={MAIN_SCREENS[ROUTE.homeScreen]}
        options={{
          tabBarIcon: ({ref}) => (
            <CustomLottie
              ref={ref}
              source={LOTTIE_FILE_PATHS[ROUTE.homeScreen]}
            />
          ),
          header: () => {
            const {setHeaderHeight} = useHeaderHeight();
            return (
              <CustomHeader
                themeColors={themeColors}
                isDark={isDark}
                setHeaderHeight={setHeaderHeight}
              />
            );
          },
          headerShown: true,
          headerTransparent: true,
        }}
      />

      <Tab.Screen
        name={ROUTE.scanScreen}
        component={MAIN_SCREENS[ROUTE.scanScreen]}
        options={{
          tabBarIcon: ({ref}) => (
            <CustomLottie
              ref={ref}
              source={LOTTIE_FILE_PATHS[ROUTE.scanScreen]}
            />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={ROUTE.settingScreen}
        component={MAIN_SCREENS[ROUTE.settingScreen]}
        options={{
          tabBarIcon: ({ref}) => (
            <CustomLottie
              ref={ref}
              source={LOTTIE_FILE_PATHS[ROUTE.settingScreen]}
            />
          ),
          headerTitle: ROUTE.settingScreen,
          headerTitleStyle: {
            color: themeColors.text100,
            letterSpacing: 1.2,
          },
          headerStyle: {backgroundColor: themeColors.bg200},
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
