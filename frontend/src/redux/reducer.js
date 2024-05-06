// reducer.js
import { createReducer } from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "./actions";

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
};

const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(loginUser, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        })
        .addCase(logoutUser, (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        });
});

export default userReducer;
