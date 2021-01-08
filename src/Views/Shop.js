import Navigation from "../Components/Navigation";
import ProductData from "../Data/ProductData";
import AddForm from "../Components/AddForm";
import '../App.css';

const Shop = function(props) {
    const products = ProductData();
    return (
        <div className="Shop">
            <Navigation 
                cartContents={props.cartContents}
                totalQuantity={props.totalQuantity}
                modalVisibility={props.modalVisibility}
                changeModalVisibility={props.changeModalVisibility}
            />
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
                addToCart={props.addToCart}
                changeModalVisibility={props.changeModalVisibility}
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
                addToCart={props.addToCart}
                changeModalVisibility={props.changeModalVisibility}
                />
            </div>
        </div>
    );
}

export default Shop;