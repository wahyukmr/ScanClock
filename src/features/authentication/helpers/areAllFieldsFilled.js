const areAllFieldsFilled = values =>
  Object.values(values).every(value => value.trim() !== '');

export default areAllFieldsFilled;
