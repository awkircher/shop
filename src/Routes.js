import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import CartHome from "./Components/CartHome";
import Locations from "./Components/Locations";
import Shop from "./Components/Shop";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/cart" component={CartHome} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;