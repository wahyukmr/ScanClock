import NetInfo from '@react-native-community/netinfo';
import {useEffect, useState} from 'react';

export const useNetwork = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  return {isConnected};
};
