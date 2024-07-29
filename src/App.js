import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthProvider} from './contexts/AuthContext';
import {ModalProvider} from './contexts/ModalContext';
import {NetworkProvider} from './contexts/NetworkContext';
import {ThemeProvider} from './contexts/ThemeContext';
import RootNavigator from './navigation/RootNavigator';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider>
          <AuthProvider>
            <ModalProvider>
              <NetworkProvider>
                <RootNavigator />
              </NetworkProvider>
            </ModalProvider>
          </AuthProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
