import Navigation from "../Components/Navigation"

const CartHome = function(props) {
    return (
        <div className="CartHome">
            <Navigation 
            cartContents={props.cartContents}
            changeModalVisibility={props.changeModalVisibility}
            modalVisibility={props.modalVisibility}
            />
            {props.cartContents}
        </div>
    );
}

export default CartHome;