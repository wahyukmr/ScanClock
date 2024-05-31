export const areAllFieldsFilled = values =>
  Object.values(values).every(value => value.trim() !== '');
