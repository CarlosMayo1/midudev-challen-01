import { createContext, useContext, type Dispatch } from 'react';
import type { AppState, StoreActions } from '../../utils/types';

interface StoreContextType {
  state: AppState;
  dispatch: Dispatch<StoreActions>;
}

export const StoreContext = createContext<StoreContextType | undefined>(
  undefined,
);

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context.state;
};

export const useDispatch = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useDispatch must be used within a StoreProvider');
  }
  return context.dispatch;
};
