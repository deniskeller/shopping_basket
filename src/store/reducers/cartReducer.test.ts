// @ts-nocheck
import { deleteItemAction } from "../cart/actions";
import { cartReducer } from "./cartReducer";

describe("тесты редюсеров корзины", () => {
  const state = {
    items: [],
    totalPrice: 0,
    totalCount: 0,
  };

  it("delete product from cart", () => {
    deleteItemAction(0);

    expect(state.items.length).toBe(0);
  });
});
