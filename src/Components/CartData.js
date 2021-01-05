import { useState, useEffect } from 'react'
//import { Utilities } from "./Utilities";

const CartData = function() {
    //always start with what's in localStorage, and if nothing's there an empty array
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
        //use Utilities to combine multiples and generate stable key
        //each state array item needs an amount in addition to the product ID and stable key
        //amount can be set by user when adding
        //amount needs to update as more products are added
        setCart([...cart, productId]);
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])


    return {cart, addToCart}
}

export default CartData;