import { CartItem } from "./cart/actionTypes";

export const computedTotalPrice = (arr: CartItem[]): number => {
  const totalCount = arr.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  return totalCount;
};

export const computedTotalCount = (arr: CartItem[]): number => {
  const totalCount = arr.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return totalCount;
};
