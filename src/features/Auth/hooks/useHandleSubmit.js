import {ErrorModalContent} from '../../../components';
import {ROUTE} from '../../../constants';
import {useAuthContext, useModalContext} from '../../../hooks';
import {navigate} from '../../../navigation/NavigationServices';
import {reqLogin, reqRegister} from '../services/authService';

export const useHandleSubmit = () => {
  const {login} = useAuthContext();
  const {openModal} = useModalContext();

  const handleLogin = async values => {
    try {
      const response = await reqLogin(values);
      await login(response);
    } catch (error) {
      openModal(ErrorModalContent, {
        title: 'Login failed:',
        errorMessages: error.message,
        btnText: 'Kembali',
      });
      navigate(ROUTE.dynamicModal);
    }
  };

  const handleRegister = async values => {
    try {
      await reqRegister(values);
      navigate(ROUTE.loginScreen);
    } catch (error) {
      openModal(ErrorModalContent, {
        title: 'Registration failed:',
        errorMessages: error.message,
        btnText: 'Kembali',
      });
      navigate(ROUTE.dynamicModal);
    }
  };

  const handleFormSubmit =
    isLoginType =>
    async (values, {setSubmitting}) => {
      try {
        // await delay(3000);
        if (isLoginType) {
          await handleLogin(values);
        } else {
          await handleRegister(values);
        }
      } catch (error) {
        openModal(ErrorModalContent, {
          title: 'Error during submission:',
          errorMessages: error.message,
          btnText: 'Kembali',
        });
        navigate(ROUTE.dynamicModal);
      } finally {
        setSubmitting(false);
      }
    };

  return {handleFormSubmit};
};
