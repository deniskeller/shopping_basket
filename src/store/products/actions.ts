import axios from "axios";
import { Dispatch } from "redux";
import { ProductAction, ProductActionTypes } from "./actionTypes";

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({ type: ProductActionTypes.FETCH_PRODUCTS });
      const response = await axios.get("http://localhost:3000/db.json");
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: response.data.pizzas,
      });
    } catch (error) {
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
        payload: "произошла ошибка при загрузке пользователей",
      });
    }
  };
};
