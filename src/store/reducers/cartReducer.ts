import { CartAction, CartActionTypes, ICartState } from "../cart/actionTypes";

const initialState: ICartState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

// const computedTotalPrice = (arr: any[]): void =>
//   arr.reduce((total, item) => item.price + total, 0);

// const computedTotalPrice = (newItems: any) => {
//   const totalPrice = Object.keys(newItems).reduce(
//     (sum, key) => newItems[key].price + sum,
//     0
//   );
//   return totalPrice;
// };

export const cartReducer = (
  state: ICartState = initialState,
  action: CartAction
): ICartState => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT_TO_CART: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    case CartActionTypes.CHANGE_ITEM: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: action.payload.quantity };
          }
          return item;
        }),
      };
    }

    default:
      return state;
  }
};
