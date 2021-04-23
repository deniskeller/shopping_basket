import { Dispatch } from "redux";
import { CartAction, CartActionTypes, CartItem } from "./actionTypes";

export const addProductToCart = (id: number) => {
  return (dispatch: Dispatch<CartAction>, getState: Function) => {
    const items: CartItem[] = getState().cart.items;
    const findItem = items.find((item) => item.id === id);
    if (findItem) {
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
    }
  };
};

export const changeQuantityAction = (quantity: number, id: number) => (
  dispatch: Dispatch<CartAction>,
  getState: Function
) => {
  dispatch({
    type: CartActionTypes.CHANGE_ITEM,
    payload: {
      id,
      quantity,
    },
  });
  const item: CartItem = getState().cart.items.find(
    (item: CartItem) => item.id === id
  );
  if (item!.quantity < 1) {
    dispatch({
      type: CartActionTypes.DELETE_PRODUCT,
      payload: id,
    });
  }
};

export const deleteItemAction = (id: number) => {
  return {
    type: CartActionTypes.DELETE_PRODUCT,
    payload: id,
  };
};

export const clearCartAction = () => {
  return {
    type: CartActionTypes.CLEAR_CART,
  };
};

export const addNewFormItemAction = (item: CartItem) => (
  dispatch: Dispatch<CartAction>,
  getState: Function
) => {
  dispatch({
    type: CartActionTypes.ADD_PRODUCT_TO_CART,
    payload: item,
  });
};
