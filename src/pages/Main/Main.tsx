import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { fetchProducts } from "../../store/products/actions";
import { RootState } from "../../store/reducers/rootReducer";
import { ProductItem, LoadingItem } from "../../components";

const Main: React.FC<RouteComponentProps> = ({ location }) => {
  // const id = location.pathname;
  // console.log("id: ", id);
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector(
    (state: RootState) => state.product
  );

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="container">
      <div className="content__top"></div>
      <div className="content__items">
        {loading
          ? Array(products.length)
              .fill(0)
              .map((_, index) => <LoadingItem key={index} />)
          : products &&
            products.map((product) => (
              <ProductItem
                key={product.id}
                {...product}
                // addProduct={handlerAddProductToCart}
              />
            ))}
      </div>
    </div>
  );
};

export default Main;
