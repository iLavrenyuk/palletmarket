import { observable, action, makeObservable } from 'mobx';

export class CartStore {
  cart = [];
  isLoading = false;

  constructor() {
    makeObservable(this, {
      cart: observable,
      isLoading: observable,
      addToCart: action.bound,
      deleteFromCart: action.bound,
      setIsLoading: action.bound,
    });
  }

  addToCart(data) {
    this.user = data;
  }

  deleteFromCart() {
    this.user = null;
  }

  setIsLoading(flag) {
    this.isLoading = flag;
  }
}
