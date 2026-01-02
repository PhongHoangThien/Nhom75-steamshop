import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Game {
    id: number;
    name: String,
    price: number,
    image: String,
    category: String,
}

interface GameState {
    games: Game[];
}

const initialState: GameState = {
    games: [],
};

const productSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setGame(state, action: PayloadAction<Game[]>) {
            state.games = action.payload
        }
    }

})

export const {setGame} = productSlice.actions;
export default productSlice.reducer;