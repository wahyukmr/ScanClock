import React, {createContext} from 'react';
import {useModal} from '../hooks/useModal';

const ModalContext = createContext();

export const ModalProvider = ({children}) => {
  const modalValues = useModal();

  return (
    <ModalContext.Provider value={modalValues}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
