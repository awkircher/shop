const CartModal = function(props) {
    if (props.visibility) {
        return (
            <div className="CartModal">
                {props.cartContents}
            </div>
        );
    } else {
        return (
            <div></div>
        )
    }
}

export default CartModal;