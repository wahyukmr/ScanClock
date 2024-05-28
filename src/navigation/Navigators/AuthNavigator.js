import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ROUTE} from '../../constants';
import {LoginScreen, RegisterScreen} from '../../features';
import {useGlobalStyles} from '../../hooks';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const globalStyles = useGlobalStyles();

  return (
    <Stack.Navigator
      initialRouteName={ROUTE.loginScreen}
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: globalStyles.backgroundColor},
      }}>
      <Stack.Screen
        name={ROUTE.loginScreen}
        component={LoginScreen}
        options={{animation: 'slide_from_left'}}
      />
      <Stack.Screen
        name={ROUTE.registerScreen}
        component={RegisterScreen}
        options={{animation: 'slide_from_right'}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
