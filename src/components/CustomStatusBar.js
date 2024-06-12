import React from 'react';
import {StatusBar} from 'react-native';

const CustomStatusBar = ({barStyle, backgroundColor}) => {
  return (
    <StatusBar
      barStyle={barStyle}
      backgroundColor={backgroundColor}
      translucent={true}
      animated={true}
    />
  );
};

export default CustomStatusBar;
