import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { ToastAndroid } from 'react-native';
import BootSplash from 'react-native-bootsplash';
import { LAYOUT, ROUTE, SCREENS } from '../constants';
import { useAuthContext, useThemeContext } from '../hooks';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  console.log('[SCAN-DIAG] AppNavigator rendered');

  const { themeColors, isDark, loadTheme } = useThemeContext();
  const { user: isAuthenticated, initializeAuth } = useAuthContext();

  useEffect(() => {
    const init = async () => {
      console.log('[SCAN-DIAG] Initialization started');

      try {
        console.log('[SCAN-DIAG] Before initializeAuth');

        await initializeAuth();

        console.log('[SCAN-DIAG] After initializeAuth');

        loadTheme();

        console.log('[SCAN-DIAG] After loadTheme');
      } catch (error) {
        console.log(
          '[SCAN-DIAG] Initialization error:',
          String(error),
          error?.stack,
        );

        ToastAndroid.showWithGravity(
          error.message,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      } finally {
        console.log('[SCAN-DIAG] Before BootSplash.hide');

        try {
          await BootSplash.hide({ fade: true });

          console.log('[SCAN-DIAG] BootSplash.hide completed');
        } catch (error) {
          console.log(
            '[SCAN-DIAG] BootSplash.hide failed:',
            String(error),
            error?.stack,
          );
        }
      }
    };

    init();
  }, [initializeAuth, loadTheme]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        orientation: 'portrait',
      }}
    >
      <>
        {isAuthenticated === null ? (
          <Stack.Screen
            name={ROUTE.authNavigator}
            component={SCREENS.AuthNavigator}
            options={{
              animationTypeForReplace: isAuthenticated ? 'pop' : 'push',
            }}
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
                statusBarStyle: isDark ? 'light' : 'dark',
                statusBarColor: 'transparent',
                statusBarTranslucent: true,
                headerShown: true,
                headerTitle: 'Scanning',
                headerTitleStyle: {
                  color: themeColors.text200,
                  letterSpacing: 1.2,
                  marginLeft: LAYOUT.marginHorizontalSmall,
                },
                headerStyle: { backgroundColor: themeColors.bg200 },
                headerBackVisible: true,
                headerTintColor: themeColors.text200,
                animationTypeForReplace: 'pop',
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
