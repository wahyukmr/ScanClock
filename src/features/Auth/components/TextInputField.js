import React, {useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import CustomIcon from '../../../components/CustomIcon';
import {DIMENSIONS, LAYOUT} from '../../../constants';
import useFormikFieldHelpers from '../hooks/useFormikFieldHelpers';

const TextInputField = ({
  name,
  icon,
  secureTextEntry,
  label,
  authStyles,
  ...props
}) => {
  const [visible, setVisible] = useState(true);

  const {value, setValue, hasError, meta, helpers, isSubmitting} =
    useFormikFieldHelpers(name);

  return (
    <View style={authStyles.formFieldWrapper}>
      <Text style={authStyles.label}>{label}</Text>
      <View
        style={[
          authStyles.baseField,
          {paddingRight: LAYOUT.paddingSmall},
          hasError && {borderColor: authStyles.errorText.color},
        ]}>
        <CustomIcon
          name={icon}
          size={DIMENSIONS.iconMedium}
          color={authStyles.primaryIcon}
        />
        <TextInput
          style={authStyles.input}
          onChangeText={setValue}
          onBlur={() => helpers.setTouched(true)}
          value={value}
          placeholderTextColor={authStyles.placeholderText}
          secureTextEntry={secureTextEntry && visible}
          editable={!isSubmitting}
          {...props}
        />
        {secureTextEntry && (
          <Pressable onPress={() => setVisible(!visible)}>
            <CustomIcon
              name={!visible ? 'eye' : 'eye-off'}
              size={DIMENSIONS.iconMedium}
              color={authStyles.secondaryIcon}
            />
          </Pressable>
        )}
      </View>
      {hasError && (
        <Text style={authStyles.errorText}>{`${meta.error}!!`}</Text>
      )}
    </View>
  );
};

export default TextInputField;
