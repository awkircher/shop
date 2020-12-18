import { useState } from 'react'

const CartData = function() {
    const [cart, setCart] = useState([]);
    const addToCart = function(event) {
        event.preventDefault();
        console.log(event);
        setCart([...cart, "add"]);
    }
    return {cart, addToCart}
}

export default CartData;