import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from '../../../components';
import {DIMENSIONS} from '../../../constants';
import {useThemedStyles} from '../../../hooks';
import {authenticationStyles} from '../../../styles';
import useFormikFieldHelpers from '../hooks/useFormikFieldHelpers';

const PickerField = ({icon, items, name, label, placeholder, ...props}) => {
  const styles = useThemedStyles(authenticationStyles);
  const {value, setValue, hasError, meta, helpers, isSubmitting} =
    useFormikFieldHelpers(name);

  return (
    <View style={styles.formFieldWrapper}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.baseField,
          hasError && {borderColor: styles.errorText.color},
        ]}>
        <Icon
          name={icon}
          size={DIMENSIONS.iconMedium}
          color={styles.primaryIcon}
        />
        <Picker
          style={{flex: 1}}
          selectedValue={value}
          onValueChange={setValue}
          onBlur={() => helpers.setTouched(true)}
          mode="dropdown"
          dropdownIconColor={styles.primaryIcon}
          dropdownIconRippleColor={styles.highlightIcon}
          enabled={!isSubmitting}
          {...props}>
          {placeholder && (
            <Picker.Item
              key={placeholder}
              label={placeholder}
              value=""
              enabled={false}
              color={styles.placeholderText}
            />
          )}
          {items.map(item => (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
              color={styles.dropdownItem}
            />
          ))}
        </Picker>
      </View>
      {hasError && <Text style={styles.errorText}>{`${meta.error}!!`}</Text>}
    </View>
  );
};

export default PickerField;
