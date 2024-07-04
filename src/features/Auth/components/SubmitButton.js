import React from 'react';
import {ActivityIndicator, Text, TouchableNativeFeedback} from 'react-native';
import Animated from 'react-native-reanimated';
import {useBtnPressAnimation} from '../Auth.animations';
import {submitButtonStyles} from './SubmitButton.styles';

const SubmitButton = ({
  type,
  onPress,
  isSubmitting,
  isDisabled,
  themeColors,
}) => {
  const {animatedStyle, handlePressIn, handlePressOut} = useBtnPressAnimation();
  const styles = submitButtonStyles(themeColors);

  return (
    <TouchableNativeFeedback
      useForeground
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      disabled={isDisabled}>
      <Animated.View
        style={[
          styles.submitBtn,
          isDisabled && {
            backgroundColor: styles.submitBtnDisabled.backgroundColor,
          },
          animatedStyle,
        ]}>
        {isSubmitting ? (
          <ActivityIndicator size="large" />
        ) : (
          <Text
            style={[
              styles.submitBtnText,
              isDisabled && {color: styles.submitBtnDisabled.color},
            ]}>
            {type}
          </Text>
        )}
      </Animated.View>
    </TouchableNativeFeedback>
  );
};

export default SubmitButton;
