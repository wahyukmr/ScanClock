import LottieView from 'lottie-react-native';
import React from 'react';
import {Text, View} from 'react-native';
import {DIMENSIONS, LOTTIE_FILE_PATHS} from '../constants';
import {useThemeContext} from '../hooks';
import {goBack} from '../navigation/NavigationServices';
import {isArray} from '../utils/isArray';
import CustomIcon from './CustomIcon';
import {errorModalContentStyles} from './ErrorModalContent.styles';
import ModalActionBtn from './ModalActionBtn';

const ErrorModalContent = ({title, errorMessages, btnText}) => {
  const {styles, themeColors} = useThemeContext(errorModalContentStyles);
  const messagesArray = isArray(errorMessages);

  return (
    <View style={styles.modalContent}>
      <LottieView
        source={LOTTIE_FILE_PATHS.Error}
        autoPlay
        loop={false}
        style={styles.lottie}
      />
      <Text style={styles.modalTitle}>{title}</Text>
      {messagesArray.map((message, index) => (
        <View key={index} style={styles.errorMessage}>
          <CustomIcon
            name="close-circle"
            size={DIMENSIONS.iconMedium}
            color={themeColors.error}
          />
          <Text style={styles.errorText}>{message}</Text>
        </View>
      ))}
      <View style={styles.modalActions}>
        <ModalActionBtn onPress={goBack} themeColors={themeColors}>
          {btnText}
        </ModalActionBtn>
      </View>
    </View>
  );
};

export default ErrorModalContent;
