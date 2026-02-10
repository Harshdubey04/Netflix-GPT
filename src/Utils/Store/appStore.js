import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Store/userSlice"
import movieReducer from "../Store/movieSlice";

const appStore=configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer,
    }
})

export default appStore;