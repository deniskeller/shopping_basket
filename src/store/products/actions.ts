import axios from "axios";
import { Dispatch } from "redux";
import { CartItem } from "../cart/actionTypes";
import { ProductAction, ProductActionTypes } from "./actionTypes";

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch(fetchProductsAction());
      const response = await axios.get("http://localhost:3001/pizzas");
      const data: CartItem[] = response.data.pizzas;
      console.log("data: ", data);
      dispatch(fetchProductsSuccessAction(data));
    } catch (error) {
      dispatch(
        fetchProductsErrorAction("произошла ошибка при загрузке товаров")
      );
    }
  };
};

export const fetchProductsAction = (): ProductAction => {
  return {
    type: ProductActionTypes.FETCH_PRODUCTS,
  };
};

export const fetchProductsSuccessAction = (data: CartItem[]): ProductAction => {
  return {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const fetchProductsErrorAction = (error: string): ProductAction => {
  return {
    type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
    payload: error,
  };
};
