import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {Text, View} from 'react-native';
import CustomIcon from '../../../components/CustomIcon';
import {DIMENSIONS} from '../../../constants';
import useFormikFieldHelpers from '../hooks/useFormikFieldHelpers';

const PickerField = ({
  icon,
  items,
  name,
  label,
  placeholder,
  authStyles,
  ...props
}) => {
  const {value, setValue, hasError, meta, helpers, isSubmitting} =
    useFormikFieldHelpers(name);

  return (
    <View style={authStyles.formFieldWrapper}>
      <Text style={authStyles.label}>{label}</Text>
      <View
        style={[
          authStyles.baseField,
          hasError && {borderColor: authStyles.errorText.color},
        ]}>
        <CustomIcon
          name={icon}
          size={DIMENSIONS.iconMedium}
          color={authStyles.primaryIcon}
        />
        <Picker
          style={{flex: 1}}
          selectedValue={value}
          onValueChange={setValue}
          onBlur={() => helpers.setTouched(true)}
          mode="dropdown"
          dropdownIconColor={authStyles.primaryIcon}
          dropdownIconRippleColor={authStyles.highlightIcon}
          enabled={!isSubmitting}
          {...props}>
          {placeholder && (
            <Picker.Item
              key={placeholder}
              label={placeholder}
              value=""
              enabled={false}
              color={authStyles.placeholderText}
            />
          )}
          {items.map(item => (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
              color={authStyles.dropdownItem.color}
              style={{backgroundColor: authStyles.dropdownItem.backgroundColor}}
            />
          ))}
        </Picker>
      </View>
      {hasError && (
        <Text style={authStyles.errorText}>{`${meta.error}!!`}</Text>
      )}
    </View>
  );
};

export default PickerField;
