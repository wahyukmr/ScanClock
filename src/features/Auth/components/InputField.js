import React, {useState} from 'react';
import {Pressable, TextInput} from 'react-native';
import {CustomIcon} from '../../../components';
import {DIMENSIONS, LAYOUT} from '../../../constants';
import {useThemeContext} from '../../../hooks';
import {useFormikFieldHelpers} from '../hooks/useFormikFieldHelpers';
import FieldContainer from './FieldContainer';
import {InputFieldStyles} from './InputField.styles';

const InputField = ({name, icon, secureTextEntry, label, ...props}) => {
  const [visible, setVisible] = useState(true);
  const {value, setValue, hasError, meta, helpers, isSubmitting} =
    useFormikFieldHelpers(name);
  const {styles, themeColors} = useThemeContext(InputFieldStyles);

  return (
    <FieldContainer
      label={label}
      hasError={hasError}
      meta={meta}
      additionalStyle={LAYOUT.paddingSmall}
      themeColors={themeColors}>
      <CustomIcon
        name={icon}
        size={DIMENSIONS.iconMedium}
        color={themeColors.accent100}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={setValue}
        onBlur={() => helpers.setTouched(true)}
        value={value}
        placeholderTextColor={themeColors.accent200}
        secureTextEntry={secureTextEntry && visible}
        editable={!isSubmitting}
        {...props}
      />
      {secureTextEntry && (
        <Pressable onPress={() => setVisible(!visible)}>
          <CustomIcon
            name={!visible ? 'eye' : 'eye-off'}
            size={DIMENSIONS.iconMedium}
            color={themeColors.accent200}
          />
        </Pressable>
      )}
    </FieldContainer>
  );
};

export default InputField;
