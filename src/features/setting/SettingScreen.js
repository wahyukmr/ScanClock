import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ROUTE} from '../../constants';
import {useAuthContext, useModalContext, useThemeContext} from '../../hooks';
import {goBack, navigate} from '../../navigation/navigationServices';
import {settingScreenStyles} from './SettingScreen.styles';
import SettingItem from './components/SettingItem';
import SettingModalContent from './components/SettingModalContent';
import SettingOptionsWrapper from './components/SettingOptionsWrapper';
import ThemeContent from './components/ThemeContent';

const SettingScreen = () => {
  const {
    styles,
    themeColors,
    isDark,
    isSystemTheme,
    setColorTheme,
    themePreferences,
  } = useThemeContext(settingScreenStyles);
  const insets = useSafeAreaInsets();
  const {openModal} = useModalContext();
  const {logout} = useAuthContext();

  const [themeChange, setThemeChange] = useState(themePreferences);
  const themeChangeRef = useRef(themeChange);

  const handleThemeChange = newTheme => {
    setThemeChange(newTheme);
    themeChangeRef.current = newTheme;
  };

  return (
    <View style={[styles.themeContainer, {paddingTop: insets.top}]}>
      <SettingOptionsWrapper
        themeColors={themeColors}
        title="Tampilan"
        action={() => {
          openModal(SettingModalContent, {
            title: 'Pilih tema',
            btnConfirm: () => {
              setColorTheme(themeChangeRef.current);
              goBack();
            },
            children: <ThemeContent onThemeChange={handleThemeChange} />,
          });
          navigate(ROUTE.dynamicModal);
        }}>
        <SettingItem
          themeColors={themeColors}
          icon={'theme-light-dark'}
          label={'Tema'}
          value={isSystemTheme ? 'Default sistem' : isDark ? 'Gelap' : 'Terang'}
        />
      </SettingOptionsWrapper>
      <SettingOptionsWrapper
        themeColors={themeColors}
        title="Akun"
        action={() => {
          openModal(SettingModalContent, {
            title: 'Yakin ingin keluar?',
            btnConfirm: () => logout(),
          });
          navigate(ROUTE.dynamicModal);
        }}>
        <SettingItem
          themeColors={themeColors}
          icon={'logout'}
          label={'Keluar'}
        />
      </SettingOptionsWrapper>
    </View>
  );
};

export default SettingScreen;
