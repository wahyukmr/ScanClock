import Lottie from 'lottie-react-native';
import React, {forwardRef} from 'react';
import {DIMENSIONS} from '../../../constants';

const CustomLottie = forwardRef(({source}, ref) => {
  return (
    <Lottie
      ref={ref}
      loop={false}
      source={source}
      style={{
        width: DIMENSIONS.iconLarge,
        height: DIMENSIONS.iconLarge,
      }}
    />
  );
});

export default CustomLottie;
