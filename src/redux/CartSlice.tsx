import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../data/Games";

const initialState: Game[] = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Game>) => {
            state.push(action.payload);
        }
    }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
