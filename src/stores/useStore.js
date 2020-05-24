import { useContext } from 'react';
import { storeContext } from './provider';

const useStore = () => {
  const store = useContext(storeContext);
  if (!store) {
    throw new Error(
      'No mobx store instance found! You probably forgot to add context provider.',
    );
  }
  return store;
};

export default useStore;
