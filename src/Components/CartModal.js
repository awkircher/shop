import '../App.css'
import { Link } from 'react-router-dom'

const CartModal = function(props) {
    console.table(props.cartContents);
    if (props.modalVisibility) {
        return (
            <div className="CartModal" onMouseLeave={() => props.changeModalVisibility(false)}>
                {props.cartContents}
                <Link to="/cart"><button className="viewCart" onClick={() => props.changeModalVisibility(false)}>Checkout</button></Link>
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