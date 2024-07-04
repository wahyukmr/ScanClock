import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ROUTE, SCREENS} from '../../constants';
import {useThemeContext} from '../../hooks';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const {isDark} = useThemeContext();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTE.homeScreen}
        component={SCREENS.Home}
        options={{
          statusBarStyle: isDark ? 'light' : 'dark',
          statusBarColor: 'transparent',
          statusBarTranslucent: true,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
