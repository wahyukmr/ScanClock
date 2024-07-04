import {ROUTE} from '../../constants';
import {navigate} from '../../navigation/NavigationServices';

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
        position: 'Staff',
      };
};

export const isDisabledButton = values => {
  return Object.values(values).every(
    value =>
      value === null || value === undefined || String(value).trim() === '',
  );
};

export const handleNavigator = isLoginType =>
  isLoginType ? navigate(ROUTE.registerScreen) : navigate(ROUTE.loginScreen);

export const generateRandomDeviceModel = () => {
  const randomNumber = Math.floor(Math.random() * 1000000);
  return randomNumber.toString();
};
