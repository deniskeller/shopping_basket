import { computedTotalCount, computedTotalPrice } from "./utils";

describe("test utils", () => {
  const mockItems = [
    {
      id: 0,
      name: "Пепперони Фреш",
      price: 803,
      quantity: 1,
    },
    {
      id: 0,
      name: "Пепперони Фреш",
      price: 803,
      quantity: 1,
    },
  ];

  test("computedTotalCount", () => {
    expect(computedTotalCount(mockItems)).toBe(2);
  });

  test("computedTotalPrice", () => {
    expect(computedTotalPrice(mockItems)).toBe(1606);
  });
});
