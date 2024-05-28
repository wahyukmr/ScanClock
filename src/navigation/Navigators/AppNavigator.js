import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ROUTE} from '../../constants';
import {useGlobalStyles, useThemeContext} from '../../hooks';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const {colorTheme} = useThemeContext();
  const globalStyles = useGlobalStyles();

  // sesuaikan nilai isAuthenticated!!
  const isAuthenticated = true;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarStyle: colorTheme === 'light' ? 'dark' : 'light',
      }}>
      {isAuthenticated ? (
        <Stack.Screen
          name={ROUTE.mainNavigator}
          component={MainNavigator}
          options={{statusBarColor: 'transparent', statusBarTranslucent: true}}
        />
      ) : (
        <Stack.Screen
          name={ROUTE.authNavigator}
          component={AuthNavigator}
          options={{
            statusBarColor: globalStyles.statusBarBgColor,
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
