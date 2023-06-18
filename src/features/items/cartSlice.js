/*eslint-disable*/
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartList: [],
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => ({
            ...state,
            cartList: state.cartList.concat(action.payload),
        }),
        setCartList: (state, action) => ({
            cartList: action.payload,
        }) ,
        changeQuantity: (state, action) => ({
            ...state,
            cartList : state.cartList.map(item => {
                if (item.id === action.payload.id && item.size === action.payload.size) {
                  return { ...item, quantity: parseInt(action.payload.quantity) };
                }
                return item;
              }),
        }),
        increaseQuantity: (state, action) => ({
            ...state,
            cartList : state.cartList.map(item => {
                if (item.id === action.payload.id && item.size === action.payload.size) {
                  return { ...item, quantity: item.quantity + parseInt(action.payload.quantity) };
                }
                return item;
              }),
        }),
        removeFromCart: (state, action) =>({
            ...state,
            cartList: state.cartList.filter(item => item.id !== action.payload.id || item.size !== action.payload.size),
        }),
    },
});


export const {addToCart, removeFromCart, setCartList, changeQuantity , increaseQuantity} = cartSlice.actions ;
export default cartSlice.reducer ;
