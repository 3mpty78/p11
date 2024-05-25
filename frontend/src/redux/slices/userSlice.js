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

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.message || "Failed to fetch user profile");
            }

            const data = await response.json();
            return data.body;
        } catch (error) {
            console.error("Failed to fetch user profile:", error.message);
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    status: "void",
    userName: "",
    firstName: "",
    lastName: "",
    error: null,
};

const userPostSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(userPost.pending, (state) => {
                state.status = "pending";
                state.error = null;
            })
            .addCase(userPost.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.userName = action.payload.userName;
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.error = null;
            })
            .addCase(userPost.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.payload;
            });
    },
});

export default userPostSlice.reducer;
