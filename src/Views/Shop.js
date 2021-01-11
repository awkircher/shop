import Navigation from "../Components/Navigation";
import ProductData from "../Data/ProductData";
import AddForm from "../Components/AddForm";
import '../App.css';
import festival from '../images/festival.png'
import eastside from '../images/eastside.png'

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
                <img src={festival} alt={products[0].name}></img>
                <h1>{products[0].name}</h1>
                <p>{products[0].price}</p>
                <p>{products[0].notes}</p>
                <AddForm
                id={products[0].id}
                name={products[0].name}
                img={festival}
                price={products[0].price}
                addToCart={props.addToCart}
                changeModalVisibility={props.changeModalVisibility}
                />
            </div>
            <div className="product">
                <img src={eastside} alt={products[1].name}></img>
                <h1>{products[1].name}</h1>
                <p>{products[1].price}</p>
                <p>{products[1].notes}</p>
                <AddForm
                id={products[1].id}
                name={products[1].name}
                img={eastside}
                price={products[1].price}
                addToCart={props.addToCart}
                changeModalVisibility={props.changeModalVisibility}
                />
            </div>
        </div>
    );
}

export default Shop;