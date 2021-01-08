import Navigation from "../Components/Navigation"

const CartHome = function(props) {
    return (
        <div className="CartHome">
            <Navigation 
            cartContents={props.cartContents}/>
            {props.cartContents}
        </div>
    );
}

export default CartHome;