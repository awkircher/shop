import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Views/Home";
import CartHome from "./Views/CartHome";
import Locations from "./Views/Locations";
import Shop from "./Views/Shop";
import CartData from "./Data/CartData";
import RemoveItem from "./Components/RemoveItem";
import EditItem from "./Components/EditItem";
import { useState } from 'react';

const Routes = () => {
  const [visibility, setVisibility] = useState(false)
  const changeVisibility = function(isVisible) {
      setVisibility(isVisible);
  }
  const cartData = CartData();
  const itemsInCart = cartData.cart;
  const addToCart = cartData.addToCart;
  let cartContents;
  if (itemsInCart.length === 0) {
      cartContents = "Your cart is empty."
  } else {
      cartContents = itemsInCart.map((item) => {
          return (
              <div className="item" key={item.uid}>
                  <h1>{item.productName}</h1>
                  <p>{item.quantity} bags</p>
                  <p>{item.productPrice} each</p>
                  <RemoveItem 
                  uid={item.uid}
                  removeItem={cartData.removeItem}/>
                  <EditItem 
                  uid={item.uid}
                  value={item.quantity}
                  editItem={cartData.editItem}/>
              </div>
          )
      });
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"> 
          <Home cartContents={cartContents}/>
        </Route>
        <Route exact path="/cart">
          <CartHome cartContents={cartContents}/>
        </Route>
        <Route exact path="/locations">
          <Locations cartContents={cartContents}/>
        </Route>
        <Route exact path="/shop">
          <Shop 
            cartContents={cartContents} 
            addToCart={addToCart}
            visibility={visibility}
            changeVisibility={changeVisibility}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;