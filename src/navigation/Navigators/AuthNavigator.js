import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ROUTE} from '../../constants';
import {useThemeContext, useThemedStyles} from '../../hooks';
import {LoginScreen, RegisterScreen} from '../../screens';
import {globalStyles} from '../../styles/globalStyles';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const styles = useThemedStyles(globalStyles);
  const {colorTheme} = useThemeContext();

  return (
    <Stack.Navigator
      initialRouteName={ROUTE.LOGIN_SCREEN}
      screenOptions={{
        headerShown: false,
        statusBarColor: styles.statusBarColor,
        statusBarStyle: colorTheme === 'light' ? 'dark' : 'light',
        contentStyle: {backgroundColor: styles.backgroundColor},
      }}>
      <Stack.Screen name={ROUTE.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen
        name={ROUTE.REGISTER_SCREEN}
        component={RegisterScreen}
        options={{animation: 'slide_from_left'}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
