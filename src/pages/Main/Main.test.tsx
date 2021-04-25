// @ts-nocheck
import { render } from "@testing-library/react";
import Main from "./Main";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("<Main/>", () => {
  it("render check <Main/>", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    const main = getByTestId("main");
    expect(main).toBeTruthy();
  });

  it("render array of products", () => {
    const products = [
      {
        id: 1,
        name: "Пепперони",
        price: 675,
      },
      {
        id: 2,
        name: "Сырная",
        price: 275,
      },
    ];
    const main = render(
      <Provider store={store}>
        <Main products={products} />
      </Provider>
    );
    expect(main).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div
              class="container"
              data-testid="main"
            >
              <div
                class="content__top"
              />
              <div
                class="content__items"
              >
                <div
                  class="pizza-block"
                  data-testid="Пепперони-1"
                >
                  <img
                    alt="Pizza"
                    class="pizza-block__image"
                  />
                  <h4
                    class="pizza-block__title"
                    data-testid="itemName"
                  >
                    Пепперони
                  </h4>
                  <div
                    class="pizza-block__bottom"
                  >
                    <div
                      class="pizza-block__price"
                    >
                      675
                       ₽
                    </div>
                    <button
                      class="button button--add button--outline"
                      data-testid="btn-add"
                    >
                      <svg
                        fill="none"
                        height="12"
                        viewBox="0 0 12 12"
                        width="12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                          fill="white"
                        />
                      </svg>
                      <span>
                        Добавить
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  class="pizza-block"
                  data-testid="Сырная-2"
                >
                  <img
                    alt="Pizza"
                    class="pizza-block__image"
                  />
                  <h4
                    class="pizza-block__title"
                    data-testid="itemName"
                  >
                    Сырная
                  </h4>
                  <div
                    class="pizza-block__bottom"
                  >
                    <div
                      class="pizza-block__price"
                    >
                      275
                       ₽
                    </div>
                    <button
                      class="button button--add button--outline"
                      data-testid="btn-add"
                    >
                      <svg
                        fill="none"
                        height="12"
                        viewBox="0 0 12 12"
                        width="12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                          fill="white"
                        />
                      </svg>
                      <span>
                        Добавить
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>,
        "container": <div>
          <div
            class="container"
            data-testid="main"
          >
            <div
              class="content__top"
            />
            <div
              class="content__items"
            >
              <div
                class="pizza-block"
                data-testid="Пепперони-1"
              >
                <img
                  alt="Pizza"
                  class="pizza-block__image"
                />
                <h4
                  class="pizza-block__title"
                  data-testid="itemName"
                >
                  Пепперони
                </h4>
                <div
                  class="pizza-block__bottom"
                >
                  <div
                    class="pizza-block__price"
                  >
                    675
                     ₽
                  </div>
                  <button
                    class="button button--add button--outline"
                    data-testid="btn-add"
                  >
                    <svg
                      fill="none"
                      height="12"
                      viewBox="0 0 12 12"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>
                      Добавить
                    </span>
                  </button>
                </div>
              </div>
              <div
                class="pizza-block"
                data-testid="Сырная-2"
              >
                <img
                  alt="Pizza"
                  class="pizza-block__image"
                />
                <h4
                  class="pizza-block__title"
                  data-testid="itemName"
                >
                  Сырная
                </h4>
                <div
                  class="pizza-block__bottom"
                >
                  <div
                    class="pizza-block__price"
                  >
                    275
                     ₽
                  </div>
                  <button
                    class="button button--add button--outline"
                    data-testid="btn-add"
                  >
                    <svg
                      fill="none"
                      height="12"
                      viewBox="0 0 12 12"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>
                      Добавить
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>,
        "debug": [Function],
        "findAllByAltText": [Function],
        "findAllByDisplayValue": [Function],
        "findAllByLabelText": [Function],
        "findAllByPlaceholderText": [Function],
        "findAllByRole": [Function],
        "findAllByTestId": [Function],
        "findAllByText": [Function],
        "findAllByTitle": [Function],
        "findByAltText": [Function],
        "findByDisplayValue": [Function],
        "findByLabelText": [Function],
        "findByPlaceholderText": [Function],
        "findByRole": [Function],
        "findByTestId": [Function],
        "findByText": [Function],
        "findByTitle": [Function],
        "getAllByAltText": [Function],
        "getAllByDisplayValue": [Function],
        "getAllByLabelText": [Function],
        "getAllByPlaceholderText": [Function],
        "getAllByRole": [Function],
        "getAllByTestId": [Function],
        "getAllByText": [Function],
        "getAllByTitle": [Function],
        "getByAltText": [Function],
        "getByDisplayValue": [Function],
        "getByLabelText": [Function],
        "getByPlaceholderText": [Function],
        "getByRole": [Function],
        "getByTestId": [Function],
        "getByText": [Function],
        "getByTitle": [Function],
        "queryAllByAltText": [Function],
        "queryAllByDisplayValue": [Function],
        "queryAllByLabelText": [Function],
        "queryAllByPlaceholderText": [Function],
        "queryAllByRole": [Function],
        "queryAllByTestId": [Function],
        "queryAllByText": [Function],
        "queryAllByTitle": [Function],
        "queryByAltText": [Function],
        "queryByDisplayValue": [Function],
        "queryByLabelText": [Function],
        "queryByPlaceholderText": [Function],
        "queryByRole": [Function],
        "queryByTestId": [Function],
        "queryByText": [Function],
        "queryByTitle": [Function],
        "rerender": [Function],
        "unmount": [Function],
      }
    `);
  });
});
