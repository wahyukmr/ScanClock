import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useThemeContext} from '../../hooks';
import {settingScreenStyles} from './SettingScreen.styles';
import ThemeSetting from './components/ThemeSetting';

const SettingScreen = () => {
  const {styles, themeColors, isDark, isSystemTheme} =
    useThemeContext(settingScreenStyles);
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.themeContainer, {paddingTop: insets.top}]}>
      <Text style={styles.title}>Tampilan</Text>
      <ThemeSetting
        themeColors={themeColors}
        isDark={isDark}
        isSystemTheme={isSystemTheme}
      />
    </View>
  );
};

export default SettingScreen;
