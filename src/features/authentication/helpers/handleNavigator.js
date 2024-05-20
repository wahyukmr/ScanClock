import {ROUTE} from '../../../constants';
import {navigate} from '../../../navigation/navigationServices';

export const handleNavigator = type => {
  const {LOGIN_SCREEN, REGISTER_SCREEN} = ROUTE;

  return type === LOGIN_SCREEN
    ? navigate(REGISTER_SCREEN)
    : navigate(LOGIN_SCREEN);
};
