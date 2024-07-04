import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ROUTE, SCREENS} from '../constants';
import {useThemeContext} from '../hooks';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const {themeColors, isDark} = useThemeContext();
  // sesuaikan nilai isAuthenticated!!
  const isAuthenticated = null;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={
        isAuthenticated ? ROUTE.mainNavigator : ROUTE.authNavigator
      }>
      <>
        {isAuthenticated ? (
          <>
            <Stack.Screen
              name={ROUTE.mainNavigator}
              component={SCREENS.MainNavigator}
            />
            <Stack.Screen
              name={ROUTE.codeScanner}
              component={SCREENS.CodeScanner}
              options={{
                animation: 'fade_from_bottom',
                statusBarStyle: isDark ? 'light' : 'dark',
                statusBarColor: 'transparent',
                statusBarTranslucent: true,
                headerShown: true,
                headerTitle: '',
                headerStyle: {backgroundColor: themeColors.bg200},
                headerBackVisible: true,
                headerTintColor: themeColors.text100,
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name={ROUTE.authNavigator}
            component={SCREENS.AuthNavigator}
          />
        )}
        <Stack.Screen
          navigationKey={isAuthenticated ? 'user' : 'guest'}
          name={ROUTE.dynamicModal}
          component={SCREENS.DynamicModalWrapper}
          options={{
            presentation: 'transparentModal',
            animation: 'fade_from_bottom',
            statusBarStyle: 'light',
            statusBarColor: 'transparent',
            statusBarTranslucent: true,
          }}
        />
      </>
    </Stack.Navigator>
  );
};

export default AppNavigator;
