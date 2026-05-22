import { useReducer } from 'react';
import { storeReducer, initialStore } from './storeReducer';
import { StoreContext } from './StoreContext';

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [store, dispatch] = useReducer(storeReducer, initialStore);

  return (
    <StoreContext.Provider value={{ state: store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
