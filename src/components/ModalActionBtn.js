import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import {modalActionBtnStyles} from './ModalActionBtn.styles';

const ModalActionBtn = ({onPress, themeColors, children}) => {
  const styles = modalActionBtnStyles(themeColors);

  return (
    <TouchableHighlight
      underlayColor={themeColors.bg300}
      style={styles.modalActionWrapper}
      onPress={onPress}>
      <Text style={styles.modalActionText}>{children}</Text>
    </TouchableHighlight>
  );
};

export default ModalActionBtn;
