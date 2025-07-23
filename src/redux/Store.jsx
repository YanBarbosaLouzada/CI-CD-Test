import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart/cartSlice";
import authReducer from "./slices/auth/authSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
    },
});

export default store;
