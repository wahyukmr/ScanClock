import {ROUTE} from '../../../constants';
import {navigate} from '../../../navigation/navigationServices';

export const handleNavigator = type => {
  const {loginScreen, registerScreen} = ROUTE;

  return type === loginScreen
    ? navigate(registerScreen)
    : navigate(loginScreen);
};
