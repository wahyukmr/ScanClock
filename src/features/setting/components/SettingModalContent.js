import React from 'react';
import {Text, View} from 'react-native';
import {ModalActionBtn} from '../../../components';
import {useThemeContext} from '../../../hooks';
import {goBack} from '../../../navigation/navigationServices';
import {settingModalContentStyles} from './SettingModalContent.styles';

const SettingModalContent = ({title, btnConfirm, children}) => {
  const {styles, themeColors} = useThemeContext(settingModalContentStyles);

  return (
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>{title}</Text>
      {children}
      <View style={styles.modalActions}>
        <ModalActionBtn onPress={goBack} themeColors={themeColors}>
          Batal
        </ModalActionBtn>
        <ModalActionBtn onPress={btnConfirm} themeColors={themeColors}>
          OKE
        </ModalActionBtn>
      </View>
    </View>
  );
};

export default SettingModalContent;
