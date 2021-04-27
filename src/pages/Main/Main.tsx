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
    return <h2 className="error">{error}</h2>;
  }

  return (
    <div className="container" data-testid="main">
      <div className="content__top"></div>
      <div className="content__items">
        {loading
          ? Array(10)
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
