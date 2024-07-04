import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {useModalContext, useThemeContext} from '../hooks';
import {goBack} from '../navigation/NavigationServices';
import {dynamicModalWrapperStyles} from './DynamicModalWrapper.styles';

const DynamicModalWrapper = () => {
  const {styles} = useThemeContext(dynamicModalWrapperStyles);
  const {modal} = useModalContext();
  const {content: ModalContent, props: modalProps} = modal;

  return (
    <View style={styles.container}>
      <Pressable
        style={[StyleSheet.absoluteFill, styles.overlay]}
        onPress={goBack}
      />
      {ModalContent ? <ModalContent {...modalProps} /> : null}
    </View>
  );
};

export default DynamicModalWrapper;
