
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [
        {
            pizzaId: 12,
            name: "test product",
            quantity: 2,
            unitePrice: 16,
            totalPrice: 32,
        },
    ],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // Add product
        addItem(state, action) {
            state.cart.push(action.payload);
        },

        // Delete product
        deleteItem(state, action) {
            state.cart = state.cart.filter(
                (item) => item.pizzaId !== action.payload
            );
        },

        // Increase quantity
        increseItemQuantity(state, action) {
            const item = state.cart.find(
                (item) => item.pizzaId === action.payload
            );

            if (item) {
                item.quantity++;
                item.totalPrice = item.quantity * item.unitePrice;
            }
        },

        // Decrease quantity
        decreaseItemQuantity(state, action) {
            const item = state.cart.find(
                (item) => item.pizzaId === action.payload
            );

            if (item && item.quantity > 1) {
                item.quantity--;
                item.totalPrice = item.quantity * item.unitePrice;
            }
        },

        // Clear cart
        clearCart(state) {
            state.cart = [];
        },
    },
});

export const {
    addItem,
    deleteItem,
    increseItemQuantity,
    decreaseItemQuantity,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
