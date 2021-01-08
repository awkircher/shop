const CartModal = function(props) {
    console.table(props.cartContents);
    if (props.modalVisibility) {
        return (
            <div className="CartModal">
                {props.cartContents}
                <button onClick={() => props.changeModalVisibility(false)}>Close</button>
            </div>
        );
    } else {
        return (
            <div></div>
        )
    }
}

export default CartModal;