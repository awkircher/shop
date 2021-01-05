import { useState, useEffect } from 'react'

const CartData = function() {
    const getSavedCart = () => {
        let savedCart = JSON.parse(localStorage.getItem('cart'));
        if (!savedCart) {
            savedCart = [];
        } 
        return savedCart;
    }

    const [cart, setCart] = useState(getSavedCart());
    
    const addToCart = function(event) {
        event.preventDefault();
        const elem = event.target;
        const productId = elem.dataset.id;
        setCart([...cart, productId]);
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])


    return {cart, addToCart}
}

export default CartData;