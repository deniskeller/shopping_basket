import { CartAction, CartActionTypes, ICartState } from "../cart/actionTypes";

const initialState: ICartState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const computedTotalPrice = (arr: any[]): number => {
  const totalCount = arr.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  return totalCount;
};

const computedTotalCount = (arr: any[]): number => {
  const totalCount = Object.keys(arr).reduce(
    (sum, key: any) => arr[key].quantity + sum,
    0
  );
  return totalCount;
};

export const cartReducer = (
  state: ICartState = initialState,
  action: CartAction
): ICartState => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT_TO_CART: {
      const newItems = [...state.items, action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: computedTotalPrice(newItems),
        totalCount: computedTotalCount(newItems),
      };
    }

    case CartActionTypes.CHANGE_ITEM: {
      const newItems = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
      return {
        ...state,
        items: newItems,
        totalPrice: computedTotalPrice(newItems),
        totalCount: computedTotalCount(newItems),
      };
    }

    default:
      return state;
  }
};
