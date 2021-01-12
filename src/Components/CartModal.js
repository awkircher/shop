import '../App.css'

const CartModal = function(props) {
    console.table(props.cartContents);
    if (props.modalVisibility) {
        return (
            <div className="CartModal" onMouseLeave={() => props.changeModalVisibility(false)}>
                {props.cartContents}
                <button className="viewCart"><a href="./cart">Checkout</a></button>
                <button className="close" onClick={() => props.changeModalVisibility(false)}>Close</button>
            </div>
        );
    } else {
        return (
            <div></div>
        )
    }
}

export default CartModal;