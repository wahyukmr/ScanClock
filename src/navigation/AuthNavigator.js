import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CustomHeaderTitle} from '../components';
import {ROUTE, SCREENS} from '../constants';
import {useNetworkContext, useThemeContext} from '../hooks';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const {isDark, themeColors} = useThemeContext();
  const {isConnected} = useNetworkContext();

  return (
    <Stack.Navigator
      screenOptions={{
        statusBarStyle: isDark ? 'light' : 'dark',
        statusBarColor: isConnected ? themeColors.bg100 : themeColors.bg200,
        statusBarTranslucent: true,
        headerShown: isConnected ? false : true,
        headerBackVisible: isConnected ? false : true,
        headerTitle: props => <CustomHeaderTitle {...props} />,
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: themeColors.bg200},
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
