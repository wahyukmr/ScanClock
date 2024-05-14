import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from './contexts';
import {useThemeContext} from './hooks';

const App = () => {
  const {colors} = useThemeContext();

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Text style={{flex: 1, backgroundColor: colors.bg100}}>App</Text>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
