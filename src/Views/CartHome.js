import Navigation from "../Components/Navigation"
import CartData from "../Data/CartData"
import RemoveItem from "../Components/RemoveItem"
import EditItem from "../Components/EditItem"

const CartHome = function() {
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
        <div className="CartHome">
            <Navigation />
            {cartContents}
        </div>
    );
}

export default CartHome;