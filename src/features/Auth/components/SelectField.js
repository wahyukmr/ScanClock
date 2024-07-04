import {Picker} from '@react-native-picker/picker';
import React, {useEffect} from 'react';
import {CustomIcon} from '../../../components';
import {DIMENSIONS} from '../../../constants';
import {useThemeContext} from '../../../hooks';
import {useFormikFieldHelpers} from '../hooks/useFormikFieldHelpers';
import FieldContainer from './FieldContainer';

const SelectField = ({
  icon,
  items,
  name,
  label,
  placeholder,
  loading,
  error,
  onValueChange,
  ...props
}) => {
  const {
    value,
    setValue,
    hasError,
    meta,
    helpers,
    isSubmitting,
    setFieldValue,
  } = useFormikFieldHelpers(name);
  const {themeColors} = useThemeContext();

  const handleValueChange = itemValue => {
    if (name === 'division') {
      onValueChange(itemValue);
    }
    setValue(itemValue);
  };

  useEffect(() => {
    if (error && name === 'department') {
      setFieldValue('department', '');
    }
  }, [error, name]);

  return (
    <FieldContainer
      label={label}
      hasError={hasError}
      error={error}
      meta={meta}
      themeColors={themeColors}>
      <CustomIcon
        name={icon}
        size={DIMENSIONS.iconMedium}
        color={themeColors.accent100}
      />
      <Picker
        style={{flex: 1, backgroundColor: themeColors.bg100}}
        selectedValue={value}
        onValueChange={handleValueChange}
        onBlur={() => helpers.setTouched(true)}
        mode="dropdown"
        dropdownIconColor={themeColors.text200}
        dropdownIconRippleColor={themeColors.bg300}
        enabled={!isSubmitting}
        {...props}>
        {placeholder && !loading && (
          <Picker.Item
            label={error ? error : placeholder}
            value=""
            enabled={false}
            color={themeColors.accent200}
          />
        )}
        {loading && (
          <Picker.Item
            label="Loading..."
            value=""
            enabled={false}
            color={themeColors.accent200}
          />
        )}
        {!error &&
          items.map(item => (
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

export default SelectField;
