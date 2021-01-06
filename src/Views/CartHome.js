import Navigation from "../Components/Navigation"
import CartData from "../Data/CartData"

const CartHome = function() {
    const cartData = CartData();
    const itemsInCart = cartData.cart;
    
    const cartContents = itemsInCart.map((item) => {
        return (
            <div className="item" key={item.uid}>
                <h1>{item.productName}</h1>
                <p>{item.quantity} bags</p>
                <p>{item.productPrice} each</p>
            </div>
        )
    });

    return (
        <div className="CartHome">
            <Navigation />
            Your Cart
            {cartContents}
        </div>
    );
}

export default CartHome;