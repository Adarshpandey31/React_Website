/*eslint-disable*/
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/items/cartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})

export default store;
