export interface ICartState {
  items: CartItem[];
  totalPrice: number;
  totalCount: number;
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  imageUrl?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export enum CartActionTypes {
  ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
  CHANGE_ITEM = "CHANGE_ITEM",
  DELETE_PRODUCT = "DELETE_PRODUCT",
  CLEAR_CART = "CLEAR_CART",
}

interface IAddProductToCart {
  type: CartActionTypes.ADD_PRODUCT_TO_CART;
  payload: CartItem;
}

interface IChangeProduct {
  type: CartActionTypes.CHANGE_ITEM;
  payload: {
    id: number;
    quantity: number;
  };
}
interface IDeleteProduct {
  type: CartActionTypes.DELETE_PRODUCT;
  payload: number;
}
interface IClearCart {
  type: CartActionTypes.CLEAR_CART;
  payload: CartItem;
}

export type CartAction =
  | IAddProductToCart
  | IChangeProduct
  | IDeleteProduct
  | IClearCart;
