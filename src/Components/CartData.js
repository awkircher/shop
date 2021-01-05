import { useState, useEffect } from 'react'

const CartData = function() {
    const getSavedCart = () => {
        return localStorage.getItem('cart');
    }

    const [cart, setCart] = useState(getSavedCart());
    
    const addToCart = function(event) {
        event.preventDefault();
        //use event properties to get at the thing to add
        //handle case of empty localStorage (not iterable)
        setCart([...cart, "add"]);
    }

    useEffect(() => {
        localStorage.setItem('cart', cart);
    }, [cart])


    return {cart, addToCart}
}

export default CartData;