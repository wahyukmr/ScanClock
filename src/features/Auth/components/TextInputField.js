import React, {useState} from 'react';
import {Pressable, TextInput} from 'react-native';
import CustomIcon from '../../../components/CustomIcon';
import {DIMENSIONS, LAYOUT} from '../../../constants';
import {useThemeContext} from '../../../hooks/useThemeContext';
import useFormikFieldHelpers from '../hooks/useFormikFieldHelpers';
import FieldContainer from './FieldContainer';
import {textInputFieldStyles} from './TextInputField.styles';

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
  const {styles, themeColors} = useThemeContext(textInputFieldStyles);

  return (
    <FieldContainer
      label={label}
      hasError={hasError}
      meta={meta}
      additionalStyle={LAYOUT.paddingSmall}>
      <CustomIcon
        name={icon}
        size={DIMENSIONS.iconMedium}
        color={themeColors.text200}
      />
      <TextInput
        style={styles.input}
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

export default TextInputField;
