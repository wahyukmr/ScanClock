import React from 'react';
import {Text, View} from 'react-native';
import {useThemeContext} from '../../../hooks/useThemeContext';
import {fieldContainerStyles} from './FieldContainer.styles';

const FieldContainer = ({label, hasError, meta, additionalStyle, children}) => {
  const {styles} = useThemeContext(fieldContainerStyles);

  return (
    <View style={styles.formFieldWrapper}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.baseField,
          hasError && {borderColor: styles.errorText.color},
          additionalStyle && {paddingRight: additionalStyle},
        ]}>
        {children}
      </View>
      {hasError && <Text style={styles.errorText}>{`${meta.error}!!`}</Text>}
    </View>
  );
};

export default FieldContainer;
