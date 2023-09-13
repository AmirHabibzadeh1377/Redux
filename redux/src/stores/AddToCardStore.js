import { configureStore } from "@reduxjs/toolkit";
import slicesReducer from './slices/Slices';
import AuthenticationSlice from "./slices/AuthenticationSlice";
const AddToCardStore = configureStore({
    reducer:{
        AddToCard: slicesReducer,
        auth: AuthenticationSlice
    }
})

export default AddToCardStore;