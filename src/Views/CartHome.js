import Navigation from "../Components/Navigation"
import { Link } from 'react-router-dom'
import '../App.css';

const CartHome = function(props) {
    const subtotal = (props.cartSubtotal).toFixed(2);
    const calculatedTax = ((props.cartSubtotal)*0.05).toFixed(2);
    const total = (props.cartSubtotal + Number(calculatedTax)).toFixed(2);
    const getSummary = function() {
        if (props.cartContents.length === undefined) {
            return (
                <div></div>
            )
        } else {
            return (
                <div className="summary">
                    <h1>Order Summary</h1>
                    <div className="lineItem">
                        <div className="label">Subtotal</div>
                        <div className="amount">${subtotal}</div>
                    </div>
                    <div className="lineItem">
                        <div className="label">Shipping</div>
                        <div className="amount">Free</div>
                    </div>
                    <div className="lineItem">
                        <div className="label">Tax</div>
                        <div className="amount">${calculatedTax}</div>
                    </div>
                    <div className="total">
                        <div className="label">Total</div>
                        <div className="amount">${total}</div>
                    </div>
                    <button className="checkout">Checkout</button>
                </div>
            )
        }
    }
    const summary = getSummary();
    return (
        <div className="CartHome">
            <Navigation 
            cartContents={props.cartContents}
            totalQuantity={props.totalQuantity}
            changeModalVisibility={props.changeModalVisibility}
            modalVisibility={props.modalVisibility}
            />
            <div className="container">
                <div className="items">
                    <Link className="back" to="/shop"><span>&#10158;</span> Back to shopping</Link>
                    {props.cartContents}
                </div>
                {summary}
            </div>
        </div>
    );
}

export default CartHome;