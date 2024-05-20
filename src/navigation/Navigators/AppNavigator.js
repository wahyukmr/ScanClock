import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ROUTE} from '../../constants';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  // sesuaikan nilai isAuthenticated!!
  const isAuthenticated = null;
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAuthenticated ? (
        <Stack.Screen name={ROUTE.MAIN_NAVIGATOR} component={MainNavigator} />
      ) : (
        <Stack.Screen name={ROUTE.AUTH_NAVIGATOR} component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
