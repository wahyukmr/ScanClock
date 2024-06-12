// HeaderHeightContext.js
import React, {createContext, useContext, useState} from 'react';

const HeaderHeightContext = createContext();

export const HeaderHeightProvider = ({children}) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <HeaderHeightContext.Provider value={{headerHeight, setHeaderHeight}}>
      {children}
    </HeaderHeightContext.Provider>
  );
};

export const useHeaderHeight = () => useContext(HeaderHeightContext);
