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
        const items = [...cart];
        const uidArray = items.map((item) => Number(item.uid));
        const highestUid = Math.max(uidArray);
        const uid = String(highestUid + 1);
        // Are there any of this product in the cart already?
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

    const removeItem = function(uid) { // call this onClick
        const items = [...cart];
        const isItem = (cartItem) => cartItem.uid === uid;
        const indexOfItem = items.findIndex(isItem);
        items.splice(indexOfItem, 1);
        setCart([...items]);
    }

    const editItem = function(value, uid) { // call this onChange
        const items = [...cart];
        const isItem = (cartItem) => cartItem.uid === uid;
        const indexOfItem = items.findIndex(isItem);
        if (value !== "") {
            items[indexOfItem].quantity = Number(value);
        } else {
            items[indexOfItem].quantity = "";
        }
        setCart([...items]);
    }

    const getTotalQuantity = function() {
        const quantities = cart.map((item) => item.quantity);
        const totalQuantity = quantities.reduce((a, b) => {return a + b}, 0);
        return totalQuantity;
    }

    useEffect(() => {
        const items = [...cart];
        const hasQuantityZero = (cartItem) => cartItem.quantity === 0;
        const indexOfItem = items.findIndex(hasQuantityZero);
        if (indexOfItem !== -1) {
            removeItem(items[indexOfItem].uid);
        }
    })
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])


    return {cart, addToCart, removeItem, editItem, getTotalQuantity}
}

export default CartData;