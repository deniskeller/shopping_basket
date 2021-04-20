export const computedTotalPrice = (arr: any[]): number => {
  const totalCount = arr.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  return totalCount;
};

export const computedTotalCount = (arr: any[]): number => {
  const totalCount = Object.keys(arr).reduce(
    (sum, key: any) => arr[key].quantity + sum,
    0
  );
  return totalCount;
};
