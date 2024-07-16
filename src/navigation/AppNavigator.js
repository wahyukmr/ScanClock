import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';
import {ErrorModalContent} from '../components';
import {ROUTE, SCREENS} from '../constants';
import {useAuthContext, useModalContext, useThemeContext} from '../hooks';
import {navigate} from './NavigationServices';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const {themeColors, isDark, loadTheme} = useThemeContext();
  const {user: isAuthenticated, initializeAuth} = useAuthContext();
  const {openModal} = useModalContext();

  useEffect(() => {
    const init = async () => {
      try {
        await initializeAuth();
        loadTheme();
      } catch (error) {
        openModal(ErrorModalContent, {
          title,
          errorMessages: `Error initializing: ${error.message}`,
          btnText: 'Kembali',
        });
        navigate(ROUTE.dynamicModal);
      } finally {
        await BootSplash.hide({fade: true});
      }
    };

    init();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <>
        {isAuthenticated === null ? (
          <Stack.Screen
            name={ROUTE.authNavigator}
            component={SCREENS.AuthNavigator}
          />
        ) : (
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
