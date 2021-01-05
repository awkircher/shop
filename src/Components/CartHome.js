import Navigation from "./Navigation"
import CartData from "./CartData"

const CartHome = function() {
    let itemsInCart = CartData();
    itemsInCart = Array.from(itemsInCart.cart)
    console.log(itemsInCart);
    return (
        <div className="CartHome">
            <Navigation />
            Your Cart
            {itemsInCart}
        </div>
    );
}

export default CartHome;