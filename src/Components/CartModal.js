import CartData from '../Data/CartData'

const CartModal = function(props) {
    if (props.visibility) {
        const cartData = CartData();
        const itemsInCart = cartData.cart;
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
                    </div>
                )
            });
        }
        return (
            <div className="CartModal">
                {cartContents}
            </div>
        );
    } else {
        return (
            <div></div>
        )
    }
}

export default CartModal;