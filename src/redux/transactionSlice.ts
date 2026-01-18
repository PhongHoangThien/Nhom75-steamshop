import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Transaction {
    id: string;
    amount: number;
    method: string;
    date: string;
    status: 'success' | 'failed' | 'pending';
    note?: string;
}

interface TransactionState {
    history: Transaction[];
}

const initialState: TransactionState = {
    history: [],
};

const transactionSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        addTransaction: (state, action: PayloadAction<Transaction>) => {
            state.history.unshift(action.payload);
        },
    },
});

export const { addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;