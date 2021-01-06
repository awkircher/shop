import Navigation from "../Components/Navigation"
import CartData from "../Data/CartData"
import Data from "../Data/ProductData"

const CartHome = function() {
    // Returns object with cart property and addToCart method.
    const cartData = CartData();
    // Returns the array "products" containing objects, e.g. "products[0].name".
    const products = Data();
    // This property mirrors the state array of item objects, e.g. "cart[0].id".
    const itemObjectsInCart = cartData.cart;
    
    // Returns array of product objects based on the array of item objects in the cart.
    const matchingProductObjects = itemObjectsInCart.map((item) => {
        // Define a callback that compares product object to cart object.
        const isMatchingId = function(product) {
            return product.id === item.productId;
        }
        // Use the callback with findIndex, and assign the matching index number to a const.
        const indexOfProductMatch = products.findIndex(isMatchingId);
        // Use the const to return the product array item we want to add to our mapped array.
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