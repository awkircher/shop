import { useState, useEffect } from 'react'

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

    class ItemInCart {
        constructor(productId, amount, uid) {
            this.productId = productId;
            this.amount = amount;
            this.uid = uid;
        }
    }

    const addToCart = function(event) {
        event.preventDefault();
        // Gets the product ID off the click event
        const elem = event.target;
        const productId = elem.dataset.id;
        const item = new ItemInCart(productId, 0, "1");
        console.log(item);
        setCart([...cart, item]);
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    console.log("here's the cart " + cart);
    return {cart, addToCart}
}

export default CartData;