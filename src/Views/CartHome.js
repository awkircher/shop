import Navigation from "../Components/Navigation"
import '../App.css';

const CartHome = function(props) {
    return (
        <div className="CartHome">
            <Navigation 
            cartContents={props.cartContents}
            totalQuantity={props.totalQuantity}
            changeModalVisibility={props.changeModalVisibility}
            modalVisibility={props.modalVisibility}
            />
            <div className="container">
                {props.cartContents}
            </div>
        </div>
    );
}

export default CartHome;