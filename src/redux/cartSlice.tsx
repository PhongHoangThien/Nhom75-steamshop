import {createSlice} from "@reduxjs/toolkit";
import {Product} from "./productSlice"

export interface CartState extends Product {
    products: [];
    quantity: number;
    totalPrice: number;
}

const initialState: { products: any[]; quantity: number; totalPrice: number } = {
    products: [],
    quantity: 0,
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const itemIndex = state.products.find((item) => item.id === newItem.id);
            if (itemIndex) {
                itemIndex.quantity++;
                itemIndex.price += newItem.price;
            } else {
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image: newItem.image,
                });
                state.totalPrice += newItem.price;
                state.quantity++;
            }
        }
    }

})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;