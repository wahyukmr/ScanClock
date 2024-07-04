import React from 'react';
import {Pressable, Text} from 'react-native';
import Animated from 'react-native-reanimated';
import {useCameraPermission, useScanButtonAnimation} from '../hooks';
import {scanButtonStyles} from './ScanButton.styles';

const ScanButton = ({themeColors}) => {
  const {animatedStyle, onPressIn, onPressOut} = useScanButtonAnimation();
  const {handleActionScannerBtn} = useCameraPermission();
  const styles = scanButtonStyles(themeColors);

  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={handleActionScannerBtn}
      style={({pressed}) => [styles.button, pressed && {opacity: 0.8}]}>
      <Animated.View style={[styles.buttonContent, animatedStyle]}>
        <Text style={styles.buttonText}>Ayo Mulai</Text>
      </Animated.View>
    </Pressable>
  );
};

export default ScanButton;
