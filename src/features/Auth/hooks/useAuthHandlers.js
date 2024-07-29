import {useMutation} from '@tanstack/react-query';
import {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {ROUTE} from '../../../constants';
import {useAuthContext} from '../../../hooks';
import {navigate} from '../../../navigation/NavigationServices';
import {credentialService} from '../../../services/credentialService';
import {tokenStorage} from '../../../services/tokenService';
import {authService} from '../services/authService';
import {useFetchUserData} from './useFetchUserData';

export const useAuthHandlers = () => {
  const {login: loginContext} = useAuthContext();
  const [token, setToken] = useState(null);
  const {data, isLoading, refetch: refetchUserData} = useFetchUserData(token);

  const handleLogin = useMutation({
    mutationFn: data => authService.loginRequest(data),
    onSuccess: async (data, variables) => {
      await credentialService.setCredentials(
        variables.email,
        variables.password,
      );
      await tokenStorage.storeToken(data.token);
      setToken(data.token);
      if (data.token) {
        const {data: userData} = await refetchUserData();
        loginContext(userData);
      }
    },
  });

  const handleRegister = useMutation({
    mutationFn: data => authService.registerRequest(data),
    onSuccess: data => {
      ToastAndroid.showWithGravity(
        data.message,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
      navigate(ROUTE.loginScreen);
    },
  });

  return {handleLogin, handleRegister};
};
