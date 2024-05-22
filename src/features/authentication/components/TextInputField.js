import React, {useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {Icon} from '../../../components';
import {DIMENSIONS, LAYOUT} from '../../../constants';
import {useThemedStyles} from '../../../hooks';
import {authenticationStyles} from '../../../styles';
import useFormikFieldHelpers from '../hooks/useFormikFieldHelpers';

const TextInputField = ({name, icon, secureTextEntry, label, ...props}) => {
  const [visible, setVisible] = useState(true);

  const styles = useThemedStyles(authenticationStyles);

  const {value, setValue, hasError, meta, helpers, isSubmitting} =
    useFormikFieldHelpers(name);

  return (
    <View style={styles.formFieldWrapper}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.baseField,
          {paddingRight: LAYOUT.paddingSmall},
          hasError && {borderColor: styles.errorText.color},
        ]}>
        <Icon
          name={icon}
          size={DIMENSIONS.iconMedium}
          color={styles.primaryIcon}
        />
        <TextInput
          style={styles.input}
          onChangeText={setValue}
          onBlur={() => helpers.setTouched(true)}
          value={value}
          placeholderTextColor={styles.placeholderText}
          secureTextEntry={secureTextEntry && visible}
          editable={!isSubmitting}
          {...props}
        />
        {secureTextEntry && (
          <Pressable onPress={() => setVisible(!visible)}>
            <Icon
              name={!visible ? 'eye' : 'eye-off'}
              size={DIMENSIONS.iconMedium}
              color={styles.secondaryIcon}
            />
          </Pressable>
        )}
      </View>
      {hasError && <Text style={styles.errorText}>{`${meta.error}!!`}</Text>}
    </View>
  );
};

export default TextInputField;
