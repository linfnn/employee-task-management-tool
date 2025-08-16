import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    user: null,
    role: null, 
    loading: false,
    error: null,
    isAuthenticated: false
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        loginRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.role = action.payload.role;
            state.isAuthenticated = true;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            return initialAuthState;
        }
    }
});

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
    logout
} = authSlice.actions;

export default authSlice.reducer;
