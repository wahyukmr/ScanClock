import React from 'react';
import {Text, View} from 'react-native';
import {DIMENSIONS} from '../constants';
import {useThemeContext} from '../hooks';
import {goBack} from '../navigation/NavigationServices';
import {isArray} from '../utils/isArray';
import CustomIcon from './CustomIcon';
import ModalActionBtn from './ModalActionBtn';
import {statusModalContentStyles} from './StatusModalContent.styles';

const StatusModalContent = ({isError, title, messages}) => {
  const {styles, themeColors} = useThemeContext(statusModalContentStyles);
  const messagesArray = isArray(messages);

  return (
    <View style={styles.modalContent}>
      <CustomIcon
        name={isError ? 'alert-circle' : 'check-circle'}
        size={150}
        color={isError ? themeColors.error : themeColors.primary100}
        style={styles.icon}
      />
      <Text style={styles.modalTitle}>{title}</Text>
      {messagesArray.map((message, index) => (
        <View key={index} style={styles.wrapperMessage}>
          <CustomIcon
            name={isError ? 'close-circle' : 'check'}
            size={DIMENSIONS.iconMedium}
            color={isError ? themeColors.error : themeColors.primary200}
          />
          <Text style={styles.textMessage}>{message}</Text>
        </View>
      ))}
      <View style={styles.modalActions}>
        <ModalActionBtn onPress={goBack} themeColors={themeColors}>
          {isError ? 'Kembali' : 'OKE'}
        </ModalActionBtn>
      </View>
    </View>
  );
};

export default StatusModalContent;
