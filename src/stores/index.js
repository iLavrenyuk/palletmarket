import { createContext, useContext } from 'react';
import { CartStore } from './cartStore';

export class Store {
  cartStore;

  constructor() {
    this.cartStore = new CartStore();
  }
}

export const store = new Store();
export const StoreContext = createContext({});
export const StoreProvider = StoreContext.Provider;

export const useStore = () => useContext(StoreContext);
