import Navigation from "../Components/Navigation"
import CartData from "../Data/CartData"
import Data from "../Data/ProductData"

const CartHome = function() {
    const cartData = CartData(); // Returns object with cart property and addToCart method.
    const products = Data(); //returns the array "products" containing objects, e.g. "products[0].name"
    const itemIdsInCart = cartData.cart; //this property contains the state array of product ID strings
    
    // Array of product objects based on the array of itemIds in the cart.
    const matchingProductObjects = itemIdsInCart.map((itemId) => {
        const isMatchingId = function(item) {
            return item.id === itemId;
        }
        const indexOfProductMatch = products.findIndex(isMatchingId);
        return products[indexOfProductMatch];
    });

    // Map over the matchingProductObjects and return jsx that displays the product name of each
    const cartContents = matchingProductObjects.map((matchingProductObject, index) => {
        return (
            <div className="item" key={index}>
                <h1>{matchingProductObject.name}</h1>
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