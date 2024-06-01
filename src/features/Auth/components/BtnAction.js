import React from 'react';
import {ActivityIndicator, Text, TouchableNativeFeedback} from 'react-native';
import Animated from 'react-native-reanimated';
import {useThemeContext} from '../../../hooks/useThemeContext';
import {useBtnPressAnimation} from '../animations/useBtnPressAnimation';
import {btnActionStyles} from './BtnAction.styles';

const BtnAction = ({type, onPress, isSubmitting, isDisabled}) => {
  const {animatedStyle, handlePressIn, handlePressOut} = useBtnPressAnimation();
  const {styles} = useThemeContext(btnActionStyles);

  return (
    <TouchableNativeFeedback
      useForeground
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      disabled={isDisabled}>
      <Animated.View
        style={[
          styles.btnForm,
          isDisabled && {
            backgroundColor: styles.btnFormDisabled.backgroundColor,
          },
          animatedStyle,
        ]}>
        {isSubmitting ? (
          <ActivityIndicator size="large" />
        ) : (
          <Text
            style={[
              styles.btnFormText,
              isDisabled && {color: styles.btnFormDisabled.color},
            ]}>
            {type}
          </Text>
        )}
      </Animated.View>
    </TouchableNativeFeedback>
  );
};

export default BtnAction;
