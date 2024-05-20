import React, {useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {LAYOUT} from '../../../constants';
import {useThemedStyles} from '../../../hooks';
import {inputFieldStyles} from '../../../styles';
import useFormikFieldHelpers from '../hooks/useFormikFieldHelpers';
import FormIcon from './FormIcon';

const TextInputField = ({name, icon, secureTextEntry, label, ...props}) => {
  const [visible, setVisible] = useState(true);

  const styles = useThemedStyles(inputFieldStyles);

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
        <FormIcon icon={icon} color={styles.primaryIcon} />
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
            <FormIcon
              icon={!visible ? 'eye' : 'eye-off'}
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
