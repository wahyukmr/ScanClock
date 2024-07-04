import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useRef} from 'react';
import useIsForeground from './useIsForeground';

const useQRCodeAnimation = () => {
  const animationRef = useRef(null);
  const isForeground = useIsForeground();

  useFocusEffect(
    useCallback(() => {
      if (animationRef.current) {
        isForeground
          ? animationRef.current.resume()
          : animationRef.current.pause();
      }

      return () => {
        if (animationRef.current) {
          animationRef.current.pause();
        }
      };
    }, [isForeground]),
  );

  return {animationRef};
};

export default useQRCodeAnimation;
