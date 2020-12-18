import Navigation from "./Navigation"
import CartData from "./CartData"

const CartHome = function() {
    const yourCart = CartData();
    return (
        <div className="CartHome">
            <Navigation />
            Your Cart
            {yourCart.cart}
            <button onClick={yourCart.addToCart}>Add to cart</button>
        </div>
    );
}

export default CartHome;