import {useState} from 'react';

export const useModal = () => {
  const [modal, setModal] = useState({content: null, props: {}});

  const openModal = (content, props = {}) => {
    setModal({content, props});
  };

  return {modal, openModal};
};
