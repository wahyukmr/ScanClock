import {useState} from 'react';
import {removeToken, storeToken} from '../services/tokenService';

export const useAuth = () => {
  const [userInfo, setUserInfo] = useState(null);

  console.log('userInfo', userInfo);

  const login = async userData => {
    try {
      await storeToken(userData.token);
      if (userInfo !== userData) {
        setUserInfo(userData);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  const logout = async () => {
    try {
      await removeToken();
      setUserInfo(null);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  // get user

  return {userInfo, login, logout};
};
