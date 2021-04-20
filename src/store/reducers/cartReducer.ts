import { CartAction, CartActionTypes, ICartState } from "../cart/actionTypes";
import { computedTotalCount, computedTotalPrice } from "../utils";

const initialState: ICartState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
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

    case CartActionTypes.DELETE_PRODUCT: {
      const newItems = state.items.filter((item) => item.id !== action.payload);
      return {
        ...state,
        items: newItems,
        totalPrice: computedTotalPrice(newItems),
        totalCount: computedTotalCount(newItems),
      };
    }

    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        items: [],
        totalPrice: 0,
        totalCount: 0,
      };

    default:
      return state;
  }
};
