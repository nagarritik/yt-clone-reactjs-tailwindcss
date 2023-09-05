import { configureStore } from "@reduxjs/toolkit";
import appConfigSlice from "../slice/appConfigSlice";

const store = configureStore(
    {
        reducer:{
            appConfig:appConfigSlice
        }
    }
)

export default store