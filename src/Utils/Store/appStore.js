import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Store/userSlice"
import movieReducer from "../Store/movieSlice";
import gptReducer from "../Store/gptSlice";
import configReducer from "../Store/configSlice";

const appStore=configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer,
        gpt:gptReducer,
        config:configReducer,
    }
})

export default appStore;