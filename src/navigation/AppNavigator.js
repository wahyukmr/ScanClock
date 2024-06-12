import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ROUTE} from '../constants';
import {AuthScreen} from '../features';
import {useThemeContext} from '../hooks/useThemeContext';
import {globalStyles} from '../styles';
import {MainNavigator} from './MainNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const {isDark, styles} = useThemeContext(globalStyles);
  const {loginScreen, registerScreen, mainNavigator} = ROUTE;

  // sesuaikan nilai isAuthenticated!!
  const isAuthenticated = true;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isAuthenticated ? (
        <Stack.Screen name={mainNavigator} component={MainNavigator} />
      ) : (
        <Stack.Group
          screenOptions={{
            statusBarColor: styles.statusBarBgColor,
            statusBarTranslucent: false,
            statusBarStyle: isDark ? 'light' : 'dark',
            contentStyle: {backgroundColor: styles.backgroundColor},
          }}>
          <Stack.Screen
            name={loginScreen}
            component={AuthScreen}
            initialParams={{type: loginScreen}}
            options={{animation: 'slide_from_left'}}
          />
          <Stack.Screen
            name={registerScreen}
            component={AuthScreen}
            initialParams={{type: registerScreen}}
            options={{animation: 'slide_from_right'}}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
