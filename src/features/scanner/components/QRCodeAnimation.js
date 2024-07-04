import LottieView from 'lottie-react-native';
import React from 'react';
import {View} from 'react-native';
import {DIMENSIONS, LAYOUT, LOTTIE_FILE_PATHS} from '../../../constants';
import {useQRCodeAnimation} from '../hooks';

const QRCodeAnimation = () => {
  const {animationRef} = useQRCodeAnimation();

  const marginBottom = LAYOUT.marginMedium + LAYOUT.marginLarge;

  return (
    <View style={{marginBottom}}>
      <LottieView
        ref={animationRef}
        source={LOTTIE_FILE_PATHS.Scanner}
        autoPlay={false}
        loop
        style={{
          width: DIMENSIONS.windowWidth / 1.2,
          height: DIMENSIONS.windowWidth / 1.2,
        }}
      />
    </View>
  );
};

export default QRCodeAnimation;
