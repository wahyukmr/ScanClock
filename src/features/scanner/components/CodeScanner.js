import {useIsFocused} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Camera,
  useCameraDevice,
  useCodeScanner,
} from 'react-native-vision-camera';
import {CustomIcon, CustomLoading} from '../../../components';
import {DIMENSIONS, LAYOUT} from '../../../constants';
import {useModalContext, useThemeContext} from '../../../hooks';
import {useHandleScanResult, useIsForeground} from '../hooks';
import {codeScannerStyles} from './CodeScanner.styles';

const CodeScanner = () => {
  const {styles, themeColors} = useThemeContext(codeScannerStyles);
  const {openModal} = useModalContext();
  const insets = useSafeAreaInsets();
  const device = useCameraDevice('back');

  const isFocused = useIsFocused();
  const isForeground = useIsForeground();
  const isActive = isFocused && isForeground;

  const [torch, setTorch] = useState(false);
  const [attendanceStatus, setAttendanceStatus] = useState({come: '', out: ''});
  const [isScanning, setIsScanning] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleScanResult = useHandleScanResult();

  const onCodeScanned = useCallback(
    codes => {
      if (!isScanning) return;
      setIsScanning(false);
      setIsLoading(true);

      const value = codes[0]?.value;
      console.log(value);
      if (!value) {
        setIsScanning(true);
        setIsLoading(false);
        return;
      }

      handleScanResult(value);
      setIsLoading(false);
    },
    [handleScanResult, isScanning],
  );

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: onCodeScanned,
  });

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isActive}
        torch={torch ? 'on' : 'off'}
        codeScanner={codeScanner}
        enableZoomGesture={true}
      />
      <View
        style={[
          styles.rightButtonRow,
          {
            top: insets.top,
            right: insets.right + LAYOUT.screenMargin,
          },
        ]}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() => setTorch(!torch)}>
          <CustomIcon
            name={torch ? 'flash' : 'flash-off'}
            size={DIMENSIONS.iconLarge}
            color={themeColors.bg300}
          />
        </TouchableOpacity>
      </View>
      {isLoading &&
        openModal(CustomLoading, {message: 'Memeriksa hasil pemindaian...'})}
    </View>
  );
};

export default CodeScanner;
