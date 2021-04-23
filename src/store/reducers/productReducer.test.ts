// @ts-nocheck
import { addProductToCart } from "../cart/actions";
import { fetchProducts } from "../products/actions";
import { productReducer } from "./productReducer";

describe("тесты страницы продуктов", () => {
  const state = {
    products: [
      {
        id: 0,
        imageUrl:
          "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
        name: "Пепперони Фреш",
        price: 803,
      },
      {
        id: 1,
        imageUrl:
          "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
        name: "Сырная",
        price: 245,
      },
      {
        id: 2,
        imageUrl:
          "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
        name: "Цыпленок барбекю",
        price: 295,
      },
      {
        id: 3,
        imageUrl:
          "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",
        name: "Кисло-сладкий цыпленок",
        price: 275,
      },
      {
        id: 4,
        imageUrl:
          "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
        name: "Чизбургер-пицца",
        price: 415,
      },
      {
        id: 5,
        imageUrl:
          "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg",
        name: "Крэйзи пепперони",
        price: 580,
      },
      {
        id: 6,
        imageUrl:
          "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
        name: "Пепперони",
        price: 675,
      },
      {
        id: 7,
        imageUrl:
          "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
        name: "Маргарита",
        price: 450,
      },
    ],
    loading: false,
    error: null,
  };

  it("render products list", () => {
    const productList = productReducer(state, fetchProducts());

    expect(productList.products.length).toBe(8);
  });

  it("item added to cart", () => {
    const addProduct = productReducer(state, addProductToCart(0));

    expect(addProduct[0]).toBe();
  });
});
