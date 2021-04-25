import { CartItem } from "../cart/actionTypes";

export interface IProductState {
  products: CartItem[];
  loading: boolean;
  error: null | string;
}

export enum ProductActionTypes {
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
}

interface IFetchProductsAction {
  type: ProductActionTypes.FETCH_PRODUCTS;
}

interface IFetchProductsSuccessAction {
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: CartItem[];
}

interface IFetchProductsErrorAction {
  type: ProductActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
}

export type ProductAction =
  | IFetchProductsAction
  | IFetchProductsSuccessAction
  | IFetchProductsErrorAction;
