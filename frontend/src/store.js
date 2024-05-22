import { combineReducers, configureStore } from "@reduxjs/toolkit";
import signinReducer from "./redux/slices/loginSlice";
import userPostReducer from "./redux/slices/userSlice";
import signupReducer from "./redux/slices/signupSlice";
import userUpdate from "./redux/slices/userUpdateSlice";

const rootReducer = (state, action) => {
    if (action.type === "signin/logout") {
        state = undefined;
    }
    return reducers(state, action);
};

const reducers = combineReducers({
    signin: signinReducer,
    user: userPostReducer,
    signup: signupReducer,
    update: userUpdate,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});
