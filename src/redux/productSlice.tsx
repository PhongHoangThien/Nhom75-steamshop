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
interface ProductState {
    products: Product[];
    searchTerm: String;
    filteredProducts: Product[];
    isLoading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    products: [],
    searchTerm: '',
    filteredProducts: [],
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
        },
        setSearchTerm(state, action: PayloadAction<string>) {
            state.searchTerm = action.payload;
            state.filteredProducts = state.products.filter(
                product => product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
            )
        }
    }
});

export const {
    fetchProductsStart,
    fetchProductsSuccess,
    fetchProductsFailure,
    setProduct,
    setSearchTerm,
} = productSlice.actions;

export default productSlice.reducer;