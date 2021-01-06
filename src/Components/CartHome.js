import Navigation from "./Navigation"
import CartData from "./CartData"
import Data from "./Data"

const CartHome = function() {
    const cartData = CartData(); // Returns object with cart property and addToCart method.
    const products = Data(); //returns the array "products" containing objects, e.g. "products[0].name"
    const itemIdsInCart = cartData.cart; //this property contains the state array of product ID strings
    
    // Returns an array of product objects based on the array of itemIds in the cart.
    const getMatchingProductObjects = function() {
        const matchingProductObjects = itemIdsInCart.map((itemId) => {
            const isMatchingId = function(item) {
                return item.id === itemId;
            }
            const indexOfProductMatch = products.findIndex(isMatchingId);
            return products[indexOfProductMatch];
        });
        return matchingProductObjects;
    };

    const matchingProductObjects = getMatchingProductObjects();
    //map over the matchingProductObjects and render the product name of each
    const cartContentsDisplay = matchingProductObjects.map((matchingProductObject, index) => {
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
            {cartContentsDisplay}
        </div>
    );
}

export default CartHome;