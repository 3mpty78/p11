import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const USER_URL = "http://localhost:3001/api/v1/user";

export const userUpdate = createAsyncThunk(
    "update/userUpdate",
    async ({ token, userName }, { rejectWithValue }) => {
        try {
            const response = await fetch(`${USER_URL}/profile`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ userName }),
            });

            if (!response.ok) {
                throw new Error("Failed to update user");
            }

            const data = await response.json();
            console.log("User successfully updated:", data.body.userName);
            return data.body;
        } catch (error) {
            console.error("Failed to update user:", error);
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    status: "void",
    error: null,
    user: null,
};

const userUpdateSlice = createSlice({
    name: "update",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(userUpdate.pending, (state) => {
                state.status = "pending";
            })
            .addCase(userUpdate.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.error = null;
                state.user = action.payload;
            })
            .addCase(userUpdate.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.payload;
            });
    },
});

export default userUpdateSlice.reducer;
