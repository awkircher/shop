import { useState, useEffect } from 'react'
import CartItem from '../Models/CartItem.js'

const CartData = function() {
    // Returns an empty array if localStorage is empty, or the previously saved cart state array.
    const getSavedCart = () => {
        let savedCart = JSON.parse(localStorage.getItem('cart'));
        if (!savedCart) {
            savedCart = [];
        } 
        return savedCart;
    }
    const [cart, setCart] = useState(getSavedCart());

    const addToCart = function(productId, productName, productPrice, productImg, quantity) {
        const uid = String(cart.length + 1);
        // Are there any of this product in the cart already?
        const items = [...cart];
        const isInCart = (cartItem) => cartItem.productId === productId;
        const indexOfItemInCart = items.findIndex(isInCart);
        if (indexOfItemInCart === -1) {
            // It wasn't in the cart -- instantiate a new item
            const item = new CartItem(productId, productName, productPrice, productImg, quantity, uid);
            setCart([...items, item]);
        } else {
            // It was in the cart -- increment the quantity property
            items[indexOfItemInCart].quantity += quantity;
            setCart([...items]);
        }
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    return {cart, addToCart}
}

export default CartData;