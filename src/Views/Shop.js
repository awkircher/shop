import Navigation from "../Components/Navigation";
import Data from "../Data/ProductData";
import CartData from "../Data/CartData";
import AddButton from "../Components/AddButton"

const Shop = function() {
    const products = Data();
    const yourCart = CartData();
    return (
        <div className="Shop">
            <Navigation />
            <div className="product">
                <h1>{products[0].name}</h1>
                <img src={products[0].img} alt={products[0].name}></img>
                <p>{products[0].price}</p>
                <p>{products[0].notes}</p>
                <AddButton
                id={products[0].id}
                addToCart={yourCart.addToCart}
                />
            </div>
            <div className="product">
                <h1>{products[1].name}</h1>
                <img src={products[1].img} alt={products[1].name}></img>
                <p>{products[1].price}</p>
                <p>{products[1].notes}</p>
                <AddButton
                id={products[1].id}
                addToCart={yourCart.addToCart}
                />
            </div>
        </div>
    );
}

export default Shop;