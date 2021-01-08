import Navigation from "../Components/Navigation"

const CartHome = function(props) {
    return (
        <div className="CartHome">
            <Navigation 
            cartContents={props.cartContents}
            changeVisibility={props.changeVisibility}
            visibility={props.visibility}
            />
            {props.cartContents}
        </div>
    );
}

export default CartHome;