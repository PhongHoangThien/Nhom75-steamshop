import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Product {
    id: number;
    name: String,
    price: number,
    image: String,
    category: String,
}

interface ProductState {
    products: Product[];
}

const initialState: ProductState = {
    products: [],
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProduct(state, action: PayloadAction<Product[]>) {
            state.products = action.payload
        }
    }

})

export const {setProduct} = productSlice.actions;
export default productSlice.reducer;