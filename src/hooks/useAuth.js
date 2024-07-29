import {useQueryClient} from '@tanstack/react-query';
import {useState} from 'react';
import {userService} from '../features/auth/services/userService';
import {credentialService} from '../services/credentialService';
import {storageService} from '../services/storageService';
import {tokenStorage} from '../services/tokenService';
import {delay} from '../utils/delay';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const queryClient = useQueryClient();

  const initializeAuth = async () => {
    try {
      const token = await tokenStorage.getToken();
      const userData = await userService.getUserData();

      if (token && userData) {
        setUser(userData);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const login = async userData => {
    try {
      if (userData) {
        await userService.storeUserData(userData);
        setUser(userData);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const logout = async () => {
    try {
      storageService.removeAllItemFromStorage();
      queryClient.clear();
      await credentialService.removeCredentials();
      await tokenStorage.removeToken();
      await userService.clearUserData();
      await delay(500);
      setUser(null);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {user, login, logout, initializeAuth};
};
