import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const item = action.payload;
            const existingItem = state.items.find(item.id === newItem.id);
            if (!existingItem) {
                state.items.push({
                    itemId: newItem.id,
                    price: newItem.price,
                    quantiy: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            }else{
                existingItem.quantity++;
                existingItem.TotalPrice= totalPrice + newItem.price;
            }
        },
        removeItemFromCart() {

        }
    }
});

export default cartSlice;