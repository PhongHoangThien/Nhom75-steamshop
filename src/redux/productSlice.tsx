import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    discount: number;
    sold: number;
    stock: number;
    releaseDate: string;
}

// Thêm isLoading và error vào State
interface ProductState {
    products: Product[];
    isLoading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
    error: null,
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProductsStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
            state.isLoading = false;
            state.products = action.payload;
            state.error = null;
        },
        fetchProductsFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        setProduct(state, action: PayloadAction<Product[]>) {
            state.products = action.payload;
        }
    }
});

export const {
    fetchProductsStart,
    fetchProductsSuccess,
    fetchProductsFailure,
    setProduct
} = productSlice.actions;

export default productSlice.reducer;