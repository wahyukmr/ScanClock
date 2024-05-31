import React from 'react';
import {ActivityIndicator, Text, TouchableNativeFeedback} from 'react-native';
import Animated from 'react-native-reanimated';
import {useBtnPressAnimation} from '../animations/useBtnPressAnimation';

const BtnAction = ({type, onPress, isSubmitting, isDisabled, authStyles}) => {
  const {animatedStyle, handlePressIn, handlePressOut} = useBtnPressAnimation();

  return (
    <TouchableNativeFeedback
      useForeground
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      disabled={isDisabled}>
      <Animated.View
        style={[
          authStyles.btnForm,
          isDisabled && {
            backgroundColor: authStyles.btnFormDisabled.backgroundColor,
          },
          animatedStyle,
        ]}>
        {isSubmitting ? (
          <ActivityIndicator size="large" />
        ) : (
          <Text
            style={[
              authStyles.btnFormText,
              isDisabled && {color: authStyles.btnFormDisabled.color},
            ]}>
            {type}
          </Text>
        )}
      </Animated.View>
    </TouchableNativeFeedback>
  );
};

export default BtnAction;
