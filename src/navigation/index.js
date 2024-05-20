import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppNavigator from './Navigators/AppNavigator';
import {navigationRef} from './navigationServices';

const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
