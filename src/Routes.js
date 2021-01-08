import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import CartHome from "./Views/CartHome";
import Locations from "./Views/Locations";
import Shop from "./Views/Shop";
import CartData from "./Data/CartData"

const Routes = () => {
  const cartData = CartData();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"> 
          <App cartData={cartData}/>
        </Route>
        <Route exact path="/cart">
          < CartHome cartData={cartData}/>
        </Route>
        <Route exact path="/locations">
          <Locations cartData={cartData}/>
        </Route>
        <Route exact path="/shop">
          <Shop cartData={cartData}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;