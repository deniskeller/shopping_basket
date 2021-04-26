import { Dispatch } from "redux";
import { CartAction, CartActionTypes, CartItem } from "./actionTypes";

export const addProductToCart = (id: number) => {
  return (dispatch: Dispatch<CartAction>, getState: Function) => {
    const items: CartItem[] = getState().cart.items;
    const findItem = items.find((item) => item.id === id);
    if (findItem) {
      dispatch(changeQuantityAction(findItem.id, findItem.quantity + 1));
    } else {
      const items: CartItem[] = getState().product.products;
      const findItem = items.find((item) => item.id === id);
      let item = findItem as CartItem;
      item.quantity = 1;
      dispatch(addProductToCartAction(item));
    }
  };
};

export const addProductToCartAction = (item: CartItem): CartAction => {
  return {
    type: CartActionTypes.ADD_PRODUCT_TO_CART,
    payload: item,
  };
};

export const changeQuantity = (quantity: number, id: number) => (
  dispatch: Dispatch<CartAction>,
  getState: Function
) => {
  dispatch(changeQuantityAction(id, quantity));
  const item: CartItem = getState().cart.items.find(
    (item: CartItem) => item.id === id
  );
  if (item.quantity < 1) {
    dispatch(deleteItemAction(id));
  }
};

export const changeQuantityAction = (
  id: number,
  quantity: number
): CartAction => {
  return {
    type: CartActionTypes.CHANGE_ITEM,
    payload: {
      id: id,
      quantity: quantity,
    },
  };
};

export const deleteItemAction = (id: number): CartAction => {
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

export const addNewFormItem = (item: CartItem) => (
  dispatch: Dispatch<CartAction>
) => {
  dispatch(addProductToCartAction(item));
};
