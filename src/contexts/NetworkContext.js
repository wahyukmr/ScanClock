import {createContext} from 'react';
import {useNetwork} from '../hooks/useNetwork';

const NetworkContext = createContext();

export const NetworkProvider = ({children}) => {
  const networkValue = useNetwork();

  return (
    <NetworkContext.Provider value={networkValue}>
      {children}
    </NetworkContext.Provider>
  );
};

export default NetworkContext;
