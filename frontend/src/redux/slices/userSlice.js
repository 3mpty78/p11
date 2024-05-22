/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const USER_URL = "http://localhost:3001/api/v1/user";

export const userPost = createAsyncThunk(
    "user/postUser",
    async ({ token }, { rejectWithValue }) => {
        try {
            const response = await fetch(`${USER_URL}/profile`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                return data;
            }
        } catch (error) {
            console.log(error.message);
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    status: "void",
    userName: "",
    firstName: "",
    lastName: "",
};

const userPostSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userPost.pending, (state) => {
                state.status = "pending";
            })
            .addCase(userPost.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.userName = action.payload.body.userName;
                state.firstName = action.payload.body.firstName;
                state.lastName = action.payload.body.lastName;
            })
            .addCase(userPost.rejected, (state, action) => {
                state.status = "rejected";
            });
    },
});

export default userPostSlice.reducer;
