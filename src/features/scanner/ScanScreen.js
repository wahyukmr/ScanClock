import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useThemeContext} from '../../hooks';
import {scanStyles} from './Scan.styles';
import QRCodeAnimation from './components/QRCodeAnimation';
import ScanButton from './components/ScanButton';

const ScanScreen = () => {
  const {styles, themeColors} = useThemeContext(scanStyles);
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <QRCodeAnimation />
      <Text style={styles.description}>
        Jelajahi dan nikmati fitur kami secara gratis dan buat hidup Anda mudah
        bersama kami.
      </Text>
      <ScanButton themeColors={themeColors} />
    </View>
  );
};

export default ScanScreen;
