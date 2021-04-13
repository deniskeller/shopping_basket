import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { Header } from "./components";
import { Main, Cart } from "./pages";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/cart" exact component={Cart} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
