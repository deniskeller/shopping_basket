// @ts-nocheck
import { ProductActionTypes } from "../products/actionTypes";
import { initialState, productReducer } from "./productReducer";

describe("тесты редюсеров продуктов", () => {
  const mockState = {
    products: [],
    loading: true,
    error: null,
  };

  it("FETCH_PRODUCTS", () => {
    const action = {
      type: ProductActionTypes.FETCH_PRODUCTS,
    };

    expect(productReducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("FETCH_PRODUCTS_SUCCESS", () => {
    const action = {
      type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
      payload: [1, 2, 3],
    };

    expect(productReducer(mockState, action)).toEqual({
      ...mockState,
      loading: false,
      products: action.payload,
    });
  });

  it("FETCH_PRODUCTS_ERROR", () => {
    const stateWithError = {
      products: 1,
      loading: true,
      error: null,
    };

    const action = {
      type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
      payload: "произошла ошибка при загрузке товаров",
    };

    expect(productReducer(stateWithError, action)).toEqual({
      ...stateWithError,
      loading: false,
      error: action.payload,
      products: [],
    });
  });
});
