import {
  IProductState,
  ProductAction,
  ProductActionTypes,
} from "../products/actionTypes";

const initialstate: IProductState = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = (
  state: IProductState = initialstate,
  action: ProductAction
): IProductState => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS:
      return {
        loading: true,
        error: null,
        products: [],
      };
    case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        loading: false,
        error: null,
        products: action.payload,
      };
    case ProductActionTypes.FETCH_PRODUCTS_ERROR:
      return {
        loading: false,
        error: action.payload,
        products: [],
      };
    default:
      return state;
  }
};
