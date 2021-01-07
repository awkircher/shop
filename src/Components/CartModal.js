const CartModal = function(props) {
    if (props.visibility) {
        return (
            <div className="CartModal">
                Your little cart
            </div>
        );
    } else {
        return (
            <div></div>
        )
    }
}

export default CartModal;