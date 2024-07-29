import NetInfo from '@react-native-community/netinfo';
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
import {API_ENDPOINTS, DIMENSIONS, LAYOUT} from '../../../constants';
import {useModalContext, useThemeContext} from '../../../hooks';
import {delay} from '../../../utils/delay';
import {handleStatusModal} from '../../../utils/handleStatusModal';
import {useIsForeground} from '../hooks';
import {useAttendanceMutation} from '../hooks/useAttendanceMutation';
import {codeScannerStyles} from './CodeScanner.styles';

const CodeScanner = () => {
  const {styles, themeColors} = useThemeContext(codeScannerStyles);
  const {openModal} = useModalContext();

  const insets = useSafeAreaInsets();
  const device = useCameraDevice('back');

  const isFocused = useIsFocused();
  const isForeground = useIsForeground();

  const [torch, setTorch] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {mutateAsync: handleAttendance, isPending: attendancePending} =
    useAttendanceMutation();

  const isActive =
    isFocused && isForeground && !attendancePending && !isLoading;

  const onCodeScanned = useCallback(
    async codes => {
      if (!isScanning) {
        setIsScanning(true);
        setIsLoading(true);

        const value = codes[0]?.value;
        const netInfo = await NetInfo.fetch();

        try {
          if (!netInfo.isConnected) {
            await delay(1500);
            throw new Error('Periksa koneksi internet anda dan coba lagi.');
          } else if (value === 'presensi-masuk') {
            await handleAttendance({
              attendance: API_ENDPOINTS.PRESENCE_IN,
              status: 'Hadir',
            });
          } else if (value === 'presensi-pulang') {
            await handleAttendance({
              attendance: API_ENDPOINTS.PRESENCE_OUT,
              status: 'Pulang',
            });
          } else {
            await delay(1500);
            throw new Error('Tidak dapat mengenali kode QR');
          }
        } catch (error) {
          setIsLoading(false);
          setIsScanning(false);
          handleStatusModal(
            openModal,
            true,
            'Pemindaian gagal',
            error?.message ?? error,
          );
        }
      }
    },
    [isScanning, handleAttendance, isLoading],
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
            right: insets.right + LAYOUT.screenPadding,
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
      {(attendancePending || isLoading) && (
        <View style={[styles.modalContainer, {top: insets.top + '50%'}]}>
          <CustomLoading message={'Memeriksa hasil pemindaian...'} />
        </View>
      )}
    </View>
  );
};

export default CodeScanner;
