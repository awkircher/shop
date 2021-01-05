import Navigation from "./Navigation"
import CartData from "./CartData"

const CartHome = function() {
    const cartData = CartData(); //object returned contains cart state array
    const itemsInCart = cartData.cart;
    return (
        <div className="CartHome">
            <Navigation />
            Your Cart
            {itemsInCart}
        </div>
    );
}

export default CartHome;