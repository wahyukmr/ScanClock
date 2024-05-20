import React from 'react';
import {ActivityIndicator, Text, TouchableNativeFeedback} from 'react-native';
import Animated from 'react-native-reanimated';
import {useThemedStyles} from '../../../hooks';
import {inputFieldStyles} from '../../../styles';
import useBtnPressAnimation from '../animations/useBtnPressAnimation';

const BtnAction = ({type, onPress, isSubmitting, isDisabled}) => {
  const styles = useThemedStyles(inputFieldStyles);
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
