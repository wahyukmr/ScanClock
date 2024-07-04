import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ROUTE, SCREENS} from '../constants';
import {useThemeContext} from '../hooks';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const {isDark, themeColors} = useThemeContext();

  return (
    <Stack.Navigator
      screenOptions={{
        statusBarStyle: isDark ? 'light' : 'dark',
        statusBarColor: themeColors.bg100,
        statusBarTranslucent: true,
        headerShown: false,
        contentStyle: {backgroundColor: themeColors.bg100},
      }}>
      <Stack.Screen
        name={ROUTE.loginScreen}
        component={SCREENS.AuthScreen}
        initialParams={{type: ROUTE.loginScreen}}
        options={{
          animation: 'slide_from_left',
        }}
      />
      <Stack.Screen
        name={ROUTE.registerScreen}
        component={SCREENS.AuthScreen}
        initialParams={{type: ROUTE.registerScreen}}
        options={{
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
