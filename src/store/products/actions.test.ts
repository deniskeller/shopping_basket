import {
  fetchProductsAction,
  fetchProductsErrorAction,
  fetchProductsSuccessAction,
} from "./actions";
import { ProductActionTypes } from "./actionTypes";

it("action: fetchProductsAction()", () => {
  const expectedAction = {
    type: ProductActionTypes.FETCH_PRODUCTS,
  };
  expect(fetchProductsAction()).toEqual(expectedAction);
});

it("action: fetchProductsSuccessAction()", () => {
  const expectedAction = {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: [
      {
        id: 1,
        name: "Маргарита",
        price: 450,
        quantity: 1,
      },
    ],
  };
  expect(
    fetchProductsSuccessAction([
      {
        id: 1,
        name: "Маргарита",
        price: 450,
        quantity: 1,
      },
    ])
  ).toEqual(expectedAction);
});

it("action: fetchProductsErrorAction()", () => {
  const expectedAction = {
    type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
    payload: "произошла ошибка при загрузке пользователей",
  };
  expect(
    fetchProductsErrorAction("произошла ошибка при загрузке пользователей")
  ).toEqual(expectedAction);
});
