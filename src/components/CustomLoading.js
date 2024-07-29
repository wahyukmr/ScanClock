import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useThemeContext} from '../hooks';
import {customLoadingStyles} from './CustomLoading.styles';

const CustomLoading = ({message}) => {
  const {styles, themeColors} = useThemeContext(customLoadingStyles);

  return (
    <>
      <View style={styles.loadingIndicator}>
        <ActivityIndicator size="large" color={themeColors.accent100} />
      </View>
      {message && <Text style={styles.textMessage}>{message}</Text>}
    </>
  );
};

export default CustomLoading;
