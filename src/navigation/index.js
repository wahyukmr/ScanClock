import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import AppNavigator from './AppNavigator';
import {navigationRef} from './NavigationServices';

const AppNavigation = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => RNBootSplash.hide({fade: true})}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
