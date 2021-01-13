import React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Views/Home";
import CartHome from "./Views/CartHome";
import Locations from "./Views/Locations";
import Shop from "./Views/Shop";
import CartData from "./Data/CartData";
import RemoveItem from "./Components/RemoveItem";
import EditItem from "./Components/EditItem";
import { useState } from 'react';

const Routes = () => {
  const [modalVisibility, setModalVisibility] = useState(false)
  const changeModalVisibility = function(isVisible) {
      setModalVisibility(isVisible);
  }
  const cartData = CartData();
  const itemsInCart = cartData.cart;
  const addToCart = cartData.addToCart;

  // Maps over everything from CartData and assembles the cart.
  let cartContents;
  let cartSubtotal = [];
  if (itemsInCart.length === 0) {
      cartContents = <div className="emptyCart">Your cart is empty.<br></br><Link to="/shop">Continue shopping</Link></div>
  } else {
      cartContents = itemsInCart.map((item) => {
        // For each line item get the total cost.
        const multiUnitPrice = item.quantity * item.productPrice;
        // Add total line item cost to the array for cart subtotal.
        cartSubtotal.push(multiUnitPrice);
          return (
              <div className="item" key={item.uid}>
                  <img className="thumbnail" src={item.productImg} alt={item.productName}></img>
                  <div className="details">
                    <h1>{item.productName}</h1>
                    <p>${multiUnitPrice}</p>
                    <RemoveItem 
                    uid={item.uid}
                    removeItem={cartData.removeItem}/>
                    <EditItem 
                    uid={item.uid}
                    value={item.quantity}
                    editItem={cartData.editItem}/>
                  </div>
              </div>
          )
      });
  }
  cartSubtotal = cartSubtotal.reduce((priceA, priceB) => {return Number(priceA) + Number(priceB)}, 0);
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/"> 
          <Home 
            cartContents={cartContents}
            totalQuantity={cartData.getTotalQuantity}
            modalVisibility={modalVisibility}
            changeModalVisibility={changeModalVisibility}
            />
        </Route>
        <Route exact path="/cart">
          <CartHome 
            cartContents={cartContents}
            totalQuantity={cartData.getTotalQuantity}
            cartSubtotal={cartSubtotal}
            modalVisibility={modalVisibility}
            changeModalVisibility={changeModalVisibility}
            />
        </Route>
        <Route exact path="/locations">
          <Locations 
            cartContents={cartContents}
            totalQuantity={cartData.getTotalQuantity}
            modalVisibility={modalVisibility}
            changeModalVisibility={changeModalVisibility}
            />
        </Route>
        <Route exact path="/shop">
          <Shop 
            cartContents={cartContents} 
            totalQuantity={cartData.getTotalQuantity}
            addToCart={addToCart}
            modalVisibility={modalVisibility}
            changeModalVisibility={changeModalVisibility}
            />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Routes;