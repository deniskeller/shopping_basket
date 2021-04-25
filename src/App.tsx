import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { Header } from "./components";
import { Main, Cart } from "./pages";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/products/actions";
import { RootState } from "./store/reducers/rootReducer";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector(
    (state: RootState) => state.product
  );

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Main products={products} error={error} loading={loading} />
            )}
          />
          <Route path="/cart" exact component={Cart} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};

const MainApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
  );
};

export default MainApp;
