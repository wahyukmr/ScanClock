import React from 'react';
import {Text, View} from 'react-native';
import {ModalActionBtn} from '../../../components';
import {useThemeContext} from '../../../hooks';
import {dynamicScannerModalStyles} from './DynamicScannerModal.styles';

const DynamicScannerModal = ({titleMsg, detailMsg, actionBtn, titleBtn}) => {
  const {styles, themeColors} = useThemeContext(dynamicScannerModalStyles);

  return (
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>{titleMsg}</Text>
      <Text style={styles.modalMessage}>{detailMsg}</Text>
      <View style={styles.modalActions}>
        <ModalActionBtn onPress={actionBtn} themeColors={themeColors}>
          {titleBtn}
        </ModalActionBtn>
      </View>
    </View>
  );
};

export default DynamicScannerModal;
