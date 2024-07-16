import {useReducer} from 'react';
import {userService} from '../features/auth/services/userService';
import initialState, {authReducer} from '../reducers/authReducer';
import {credentialService} from '../services/credentialService';
import {storageService} from '../services/storageService';
import {tokenStorage} from '../services/tokenService';

export const useAuth = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const initializeAuth = async () => {
    dispatch({type: 'SET_LOADING', payload: true});
    try {
      const token = await tokenStorage.getToken();
      if (token) {
        console.log('ada token,');
        const userData = await userService.fetchUserData();
        dispatch({type: 'SET_USER', payload: userData});
      } else {
        dispatch({type: 'SET_LOADING', payload: false});
      }
    } catch (error) {
      dispatch({type: 'SET_ERROR', payload: error.message});
    }
  };

  const login = userData => {
    dispatch({type: 'SET_USER', payload: userData});
  };

  const logout = async () => {
    try {
      dispatch({type: 'SET_LOADING', payload: true});
      storageService.removeAllItemFromStorage();
      await credentialService.removeCredentials();
      await tokenStorage.removeToken();
      await userService.clearUserData();
      dispatch({type: 'LOGOUT'});
    } catch (error) {
      dispatch({
        type: 'SET_ERROR',
        payload: `Error during logout: ${error.message}`,
      });
    }
  };

  return {...state, login, logout, initializeAuth};
};
