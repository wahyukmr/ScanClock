import React, {useEffect} from 'react';
import {AppState, Linking, Text, View} from 'react-native';
import {ModalActionBtn} from '../../../components';
import {useThemeContext} from '../../../hooks';
import {goBack} from '../../../navigation/navigationServices';
import {useCameraPermission} from '../hooks';
import {cameraPermissionModalStyles} from './CameraPermissionModal.styles';

const CameraPermissionModal = () => {
  const {styles, themeColors} = useThemeContext(cameraPermissionModalStyles);
  const {checkCameraPermission} = useCameraPermission();

  useEffect(() => {
    checkCameraPermission();

    const handleAppStateChange = nextAppState => {
      if (nextAppState === 'active') {
        checkCameraPermission();
      }
    };

    const subcription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => subcription.remove();
  }, []);

  return (
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Izin akses kamera diperlukan !!</Text>
      <Text style={styles.modalMessage}>
        {
          'Aplikasi ini memerlukan akses kamera untuk melakukan pemindaian QR Code. \n\nAnda harus mengaktifkan izin akses kamera secara manual di pengaturan perangkat.'
        }
      </Text>
      <View style={styles.modalActions}>
        <ModalActionBtn onPress={goBack} themeColors={themeColors}>
          Kembali
        </ModalActionBtn>
        <ModalActionBtn
          onPress={async () => await Linking.openSettings()}
          themeColors={themeColors}>
          OKE
        </ModalActionBtn>
      </View>
    </View>
  );
};

export default CameraPermissionModal;
