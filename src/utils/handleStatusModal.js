import {StatusModalContent} from '../components';
import {ROUTE} from '../constants';
import {navigate} from '../navigation/navigationServices';

export const handleStatusModal = (openModal, isError, title, error) => {
  !isError && navigate(ROUTE.homeScreen);
  openModal(StatusModalContent, {
    isError,
    title,
    messages: error,
  });
  navigate(ROUTE.dynamicModal);
};
