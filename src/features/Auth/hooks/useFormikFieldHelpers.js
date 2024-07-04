import {useField, useFormikContext} from 'formik';

export const useFormikFieldHelpers = name => {
  const [field, meta, helpers] = useField(name);
  const {value} = field;
  const {setValue} = helpers;
  const hasError = meta.touched && meta.error;

  const {isSubmitting, isValidating, setFieldValue} = useFormikContext();

  return {
    value,
    setValue,
    hasError,
    meta,
    helpers,
    isSubmitting,
    isValidating,
    setFieldValue,
  };
};
