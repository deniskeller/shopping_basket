import React from "react";
import { ProductItem, LoadingItem } from "../../components";
import { CartItem } from "../../store/cart/actionTypes";

type MainProps = {
  products: CartItem[];
  error: string | null;
  loading: boolean;
};

const Main: React.FC<MainProps> = ({ products, error, loading }) => {
  if (error) {
    return <h1>произошла ошибка при загрузке пользователей</h1>;
  }

  return (
    <div className="container" data-testid="main">
      <div className="content__top"></div>
      <div className="content__items">
        {loading
          ? Array(products.length)
              .fill(0)
              .map((_, index) => <LoadingItem key={index} />)
          : products &&
            products.map((product) => (
              <ProductItem key={product.id} {...product} />
            ))}
      </div>
    </div>
  );
};

export default Main;
