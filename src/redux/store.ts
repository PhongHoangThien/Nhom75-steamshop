import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./gameSlice";
import gameSlice from "./gameSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        games: gameSlice,
    }
})
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
