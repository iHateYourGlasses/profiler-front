import React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import store from '.'

export const storeContext = React.createContext(store);

const StoreProvider = ({ children }) => {
  const storeHook = useLocalStore(() => store);
  return (
    <storeContext.Provider value={storeHook}>{children}</storeContext.Provider>
  );
};

export default StoreProvider;
