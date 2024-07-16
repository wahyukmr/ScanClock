import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthProvider} from './contexts/AuthContext';
import {ModalProvider} from './contexts/ModalContext';
import {NetworkProvider} from './contexts/NetworkContext';
import {ThemeProvider} from './contexts/ThemeContext';
import RootNavigator from './navigation';

const App = () => {
  return (
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
  );
};

export default App;
