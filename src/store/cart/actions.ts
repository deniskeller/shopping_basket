import { Dispatch } from "redux";
import { CartAction, CartActionTypes, CartItem } from "./actionTypes";

export const addProductToCart = (id: number) => {
  return (dispatch: Dispatch<CartAction>, getState: Function) => {
    const items: CartItem[] = getState().cart.items;
    const findItem = items.find((item) => item.id === id);
    if (findItem) {
      console.log("Товар добавлен в корзину1");
      dispatch({
        type: CartActionTypes.CHANGE_ITEM,
        payload: {
          id: findItem.id,
          quantity: findItem.quantity + 1,
        },
      });
    } else {
      const items: CartItem[] = getState().product.products;
      const findItem = items.find((item) => item.id === id);
      let item = findItem as CartItem;
      item.quantity = 1;
      dispatch({
        type: CartActionTypes.ADD_PRODUCT_TO_CART,
        payload: item,
      });
      console.log("Товар добавлен в корзину2");
    }
    const cartItems = getState().cart.items;
    console.log("cartItems: ", cartItems);
  };
};
