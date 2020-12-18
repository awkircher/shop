import Navigation from "./Navigation";
import Data from "./Data";

const Shop = function() {
    const products = Data();
    return (
        <div className="Shop">
            <Navigation />
            <div className="product">
                <h1>{products[0].name}</h1>
                <img src={products[0].img} alt={products[0].name}></img>
                <p>{products[0].price}</p>
                <p>{products[0].notes}</p>
            </div>
            <div className="product">
                <h1>{products[1].name}</h1>
                <img src={products[1].img} alt={products[1].name}></img>
                <p>{products[1].price}</p>
                <p>{products[1].notes}</p>
            </div>
        </div>
    );
}

export default Shop;