import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";

import SignIn from "./pages/SignIn.jsx";
import Homepage from "./pages/Homepage.jsx";
import User from "./pages/User.jsx";
import store from "./redux/store.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/sign-in",
        element: <SignIn />,
    },
    {
        path: "/user",
        element: <User />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
