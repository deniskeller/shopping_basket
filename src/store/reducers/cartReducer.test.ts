// @ts-nocheck
import { deleteItemAction } from "../cart/actions";
import { cartReducer } from "./cartReducer";

describe("тесты редюсеров корзины", () => {
  const mockState = {
    items: [],
    totalPrice: 0,
    totalCount: 0,
  };

  it("delete product from cart", () => {
    deleteItemAction(0);

    expect(mockState.items.length).toBe(0);
  });
});
