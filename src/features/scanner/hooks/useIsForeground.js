import {useCallback, useEffect, useState} from 'react';
import {AppState} from 'react-native';

const useIsForeground = () => {
  const [isForeground, setIsForeground] = useState(
    AppState.currentState === 'active',
  );

  const onChange = useCallback(state => {
    setIsForeground(state === 'active');
  }, []);

  useEffect(() => {
    const listener = AppState.addEventListener('change', onChange);
    return () => listener.remove();
  }, [onChange]);

  return isForeground;
};

export default useIsForeground;
