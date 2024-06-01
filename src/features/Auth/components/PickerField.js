import {Picker} from '@react-native-picker/picker';
import React from 'react';
import CustomIcon from '../../../components/CustomIcon';
import {DIMENSIONS} from '../../../constants';
import {useThemeContext} from '../../../hooks/useThemeContext';
import useFormikFieldHelpers from '../hooks/useFormikFieldHelpers';
import FieldContainer from './FieldContainer';

const PickerField = ({icon, items, name, label, placeholder, ...props}) => {
  const {value, setValue, hasError, meta, helpers, isSubmitting} =
    useFormikFieldHelpers(name);
  const {themeColors} = useThemeContext();

  return (
    <FieldContainer label={label} hasError={hasError} meta={meta}>
      <CustomIcon
        name={icon}
        size={DIMENSIONS.iconMedium}
        color={themeColors.text200}
      />
      <Picker
        style={{flex: 1}}
        selectedValue={value}
        onValueChange={setValue}
        onBlur={() => helpers.setTouched(true)}
        mode="dropdown"
        dropdownIconColor={themeColors.text200}
        dropdownIconRippleColor={themeColors.bg300}
        enabled={!isSubmitting}
        {...props}>
        {placeholder && (
          <Picker.Item
            key={placeholder}
            label={placeholder}
            value=""
            enabled={false}
            color={themeColors.accent200}
          />
        )}
        {items.map(item => (
          <Picker.Item
            key={item.value}
            label={item.label}
            value={item.value}
            color={themeColors.text100}
            style={{backgroundColor: themeColors.bg100}}
          />
        ))}
      </Picker>
    </FieldContainer>
  );
};

export default PickerField;
