// @ts-nocheck
import { fireEvent, render } from "@testing-library/react";
import Button from "./Button";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("<Button/>", () => {
  const items = [
    {
      id: 1,
      imageUrl:
        "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
      name: "Пепперони Фреш",
      price: 803,
      quantity: 1,
    },
  ];
  const computedQuantity = (id: number): number | undefined => {
    const findItem = items.find((item) => item.id === id);
    return findItem?.quantity;
  };

  const children = (
    <>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      <span>Добавить</span>
      <i data-testid="quantity">{computedQuantity(1)}</i>
    </>
  );

  it("add product", () => {
    const mockAddProductToCart = jest.fn();

    const { getByTestId, debug } = render(
      <Provider store={store}>
        <Button onClick={mockAddProductToCart} children={children} />
      </Provider>
    );

    const btnAdd = getByTestId("btn-add");
    expect(btnAdd).toBeTruthy();
    fireEvent.click(btnAdd);
    expect(mockAddProductToCart).toHaveBeenCalled();
    expect(mockAddProductToCart).toHaveBeenCalledTimes(1);
    const quantity = getByTestId("quantity").textContent;
    expect(quantity).toBe("1");
    debug();
  });
});
