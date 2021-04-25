// @ts-nocheck
import { render } from "@testing-library/react";
import ProductItem from "./ProductItem";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("<ProductItem/>", () => {
  const mockItem = { id: 1, name: "Сырная", price: 300 };

  it("render item", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ProductItem
          id={mockItem.id}
          name={mockItem.name}
          price={mockItem.price}
        />
      </Provider>
    );
    const itemName = getByTestId("itemName").textContent;
    expect(itemName).toBe(mockItem.name);
  });
});
