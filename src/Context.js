import React, { createContext, useState } from 'react';
import useWindowDimensions from '@src/hooks/useWindowDimensions';
export const Context = createContext();

const Provider = ({ children }) => {
  const [bar, setBar] = useState(false);
  const [isSelectBar, setSelectBar] = useState(false);
  const window = useWindowDimensions();

  const value = {
    window,
    bar,
    handleBar: () => {
      setBar(!bar);
    },
    isSelectBar,
    handleSelectBar: () => {
      setSelectBar(!isSelectBar);
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
