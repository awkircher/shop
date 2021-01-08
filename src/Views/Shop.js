import Navigation from "../Components/Navigation";
import ProductData from "../Data/ProductData";
//import CartData from "../Data/CartData";
import AddForm from "../Components/AddForm";
import RemoveItem from "../Components/RemoveItem";
import EditItem from "../Components/EditItem";

const Shop = function(props) {
    const products = ProductData();
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
        <div className="Shop">
            <Navigation cartContents={cartContents}/>
            <div className="product">
                <h1>{products[0].name}</h1>
                <img src={products[0].img} alt={products[0].name}></img>
                <p>{products[0].price}</p>
                <p>{products[0].notes}</p>
                <AddForm
                id={products[0].id}
                name={products[0].name}
                img={products[0].img}
                price={products[0].price}
                addToCart={props.cartData.addToCart}
                />
            </div>
            <div className="product">
                <h1>{products[1].name}</h1>
                <img src={products[1].img} alt={products[1].name}></img>
                <p>{products[1].price}</p>
                <p>{products[1].notes}</p>
                <AddForm
                id={products[1].id}
                name={products[1].name}
                img={products[1].img}
                price={products[1].price}
                addToCart={props.cartData.addToCart}
                />
            </div>
        </div>
    );
}

export default Shop;