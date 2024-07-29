export const initialValues = isLoginType => {
  return isLoginType
    ? {
        email: '',
        password: '',
      }
    : {
        name: '',
        gender: 'pria',
        phone: '',
        email: '',
        password: '',
        division: '',
        department: '',
        branch: '',
        position: 'staff',
      };
};

export const isEmptyValues = values => {
  return Object.values(values).some(
    value => !value || String(value).trim() === '',
  );
};

export const generateRandomDeviceModel = () => {
  const randomNumber = Math.floor(Math.random() * 1000000);
  return randomNumber.toString();
};
