import {configureStore} from "@reduxjs/toolkit";
import CartReducers from './productSlice.js';

// Creating the Redux store with the cart reducer
const appStore=configureStore({
    reducer:{
        cart:CartReducers, // Assigning the cart slice reducer
    }
});
// Subscribing to store updates
appStore.subscribe(() => {
    const state = appStore.getState();
     // Save the cart items to localStorage
    localStorage.setItem('cartItems', JSON.stringify(state.cart.items));
});

export default appStore;