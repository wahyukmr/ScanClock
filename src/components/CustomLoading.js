import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useThemeContext} from '../hooks';
import {customLoadingStyles} from './CustomLoading.styles';

const CustomLoading = props => {
  const {styles, themeColors} = useThemeContext(customLoadingStyles);

  return (
    <View style={styles.modalContainer}>
      <View style={styles.loadingIndicator}>
        <ActivityIndicator
          size="large"
          color={themeColors.text100}
          {...props}
        />
      </View>
      {props.message && (
        <Text style={styles.loadingMessage}>{props.message}</Text>
      )}
    </View>
  );
};

export default CustomLoading;
