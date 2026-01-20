import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PurchasedState {
    items: any[];
}

const initialState: PurchasedState = {
    items: []
};

const purchaseSlice = createSlice({
    name: "purchase",
    initialState,
    reducers: {
        addPurchasedItems: (state, action: PayloadAction<any[]>) => {
            action.payload.forEach((item) => {
                const exists = state.items.find(i => i.id === item.id);
                if (!exists) {
                    state.items.push({
                        ...item,
                        purchasedAt: new Date().toISOString()
                    });
                }
            });
        },
        clearPurchased: (state) => {
            state.items = [];
        }
    }
});

export const { addPurchasedItems, clearPurchased } = purchaseSlice.actions;
export default purchaseSlice.reducer;
