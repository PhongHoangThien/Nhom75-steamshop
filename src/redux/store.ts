import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import authReducer from "./authSlice";
import wishlistReducer from "./wishlistSlice";
import transactionReducer from "./transactionSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productSlice,
        auth: authReducer,
        wishlist: wishlistReducer,
        transactions: transactionReducer,
    }
})
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch