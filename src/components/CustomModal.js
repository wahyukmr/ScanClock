import React from 'react';
import {Modal, Pressable, View} from 'react-native';
import customModalStyles from './CustomModal.styles';

const CustomModal = ({visible, onCloseModal, themeColors, children}) => {
  const styles = customModalStyles(themeColors);

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onCloseModal}>
      <View style={styles.modalAlignment}>
        <Pressable style={styles.overlay} onPress={onCloseModal} />
        {children}
      </View>
    </Modal>
  );
};

export default CustomModal;
