import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    id: number;
    username: string;
    email: string;
    password?: string;
    role?: string;
    avatar?: string;
    phone?: string;
    balance?: number;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess(state, action: PayloadAction<User>) {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = null;
        },
        loginFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        },
        registerStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        registerSuccess(state) {
            state.isLoading = false;
            state.error = null;
        },
        registerFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        updateBalance(state, action: PayloadAction<number>) {
            if (state.user) {
                const currentBalance = state.user.balance || 0;
                state.user.balance = currentBalance + action.payload;
            }
        }
    }
});

export const {
    loginStart, loginSuccess, loginFailure, logout,
    registerStart, registerSuccess, registerFailure,
    updateBalance
} = authSlice.actions;

export default authSlice.reducer;