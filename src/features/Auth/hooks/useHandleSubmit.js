import NetInfo from '@react-native-community/netinfo';
import {useModalContext} from '../../../hooks';
import {delay} from '../../../utils/delay';
import {handleStatusModal} from '../../../utils/handleStatusModal';
import {useAuthHandlers} from './useAuthHandlers';

export const useHandleSubmit = () => {
  const {openModal} = useModalContext();
  const {handleLogin, handleRegister} = useAuthHandlers();

  const handleFormSubmit =
    isLoginType =>
    async (values, {setSubmitting}) => {
      try {
        const netInfo = await NetInfo.fetch();
        await delay(500);
        if (!netInfo.isConnected) {
          handleStatusModal(
            openModal,
            true,
            'Koneksi Error',
            'Periksa koneksi internet anda dan coba lagi.',
          );
          return;
        }

        if (isLoginType) {
          await handleLogin.mutateAsync(values);
        } else {
          await handleRegister.mutateAsync(values);
        }
      } catch (error) {
        handleStatusModal(
          openModal,
          true,
          `${isLoginType ? 'Login' : 'Registration'} gagal`,
          error.message,
        );
      } finally {
        await delay(1000);
        setSubmitting(false);
      }
    };

  return {handleFormSubmit};
};
