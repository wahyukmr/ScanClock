import {createContext} from 'react';
import {useAuth} from '../hooks/useAuth';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const authValues = useAuth();

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
