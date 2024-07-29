/**
 * @fileoverview This file sets up the bottom tab navigator using React Navigation and Lottie for animated icons.
 */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {LOTTIE_FILE_PATHS, ROUTE, SCREENS} from '../../constants';
import {useThemeContext} from '../../hooks';
import CustomLottie from './customTabBar/CustomLottie';
import CustomTabBar from './customTabBar/CustomTabBar';

const Tab = createBottomTabNavigator();

/**
 * MainNavigator component that sets up the bottom tab navigator.
 * @returns {React.Component} Them main navigator component with configured tabs.
 */
const MainNavigator = () => {
  const {themeColors} = useThemeContext();

  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name={ROUTE.homeStack}
        component={SCREENS.HomeStack}
        options={{
          tabBarIcon: ({ref}) => (
            <CustomLottie
              ref={ref}
              source={LOTTIE_FILE_PATHS[ROUTE.homeScreen]}
            />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={ROUTE.scanStack}
        component={SCREENS.ScanStack}
        options={{
          tabBarIcon: ({ref}) => (
            <CustomLottie
              ref={ref}
              source={LOTTIE_FILE_PATHS[ROUTE.scanScreen]}
            />
          ),
          headerShown: true,
          headerTitle: ROUTE.scanScreen,
          headerTitleStyle: {
            color: themeColors.text200,
            letterSpacing: 1.2,
          },
          headerStyle: {backgroundColor: themeColors.bg200},
        }}
      />

      <Tab.Screen
        name={ROUTE.settingStack}
        component={SCREENS.SettingStack}
        options={{
          tabBarIcon: ({ref}) => (
            <CustomLottie
              ref={ref}
              source={LOTTIE_FILE_PATHS[ROUTE.settingScreen]}
            />
          ),
          headerShown: true,
          headerTitle: ROUTE.settingScreen,
          headerTitleStyle: {
            color: themeColors.text200,
            letterSpacing: 1.2,
          },
          headerStyle: {backgroundColor: themeColors.bg200},
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
