import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ROUTE, SCREENS} from '../../constants';
import {useThemeContext} from '../../hooks';

const Stack = createNativeStackNavigator();

const SettingStack = () => {
  const {isDark} = useThemeContext();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTE.settingScreen}
        component={SCREENS.Setting}
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

export default SettingStack;
