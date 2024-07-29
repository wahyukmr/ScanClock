import React from 'react';
import {Text, View} from 'react-native';
import {fieldContainerStyles} from './FieldContainer.styles';

const FieldContainer = ({
  label,
  hasError,
  error,
  meta,
  additionalStyle,
  themeColors,
  children,
}) => {
  const styles = fieldContainerStyles(themeColors);

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
      {hasError && (
        <Text style={styles.errorText}>{`${
          error ? 'Pilih devisi yang tepat' : meta.error
        }!!`}</Text>
      )}
    </View>
  );
};

export default FieldContainer;
