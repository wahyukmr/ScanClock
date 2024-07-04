import {useContext} from 'react';
import ModalContext from '../contexts/ModalContext';

export const useModalContext = () => useContext(ModalContext);
