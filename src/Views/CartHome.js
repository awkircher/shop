import Navigation from "../Components/Navigation"
//import CartData from "../Data/CartData"
import RemoveItem from "../Components/RemoveItem"
import EditItem from "../Components/EditItem"

const CartHome = function(props) {
    //const cartData = CartData();
    const itemsInCart = props.cartData.cart;
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
                    removeItem={props.cartData.removeItem}/>
                    <EditItem 
                    uid={item.uid}
                    value={item.quantity}
                    editItem={props.cartData.editItem}/>
                </div>
            )
        });
    }

    return (
        <div className="CartHome">
            <Navigation 
            cartContents={cartContents}/>
            {cartContents}
        </div>
    );
}

export default CartHome;