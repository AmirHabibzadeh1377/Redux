import { createSlice } from "@reduxjs/toolkit";

const Slices = createSlice({
    name: "AddToCardSlice",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        Add:(state,actions)=>{
           state.value += actions.payload.payload
        }
    }
})

export const {increment , decrement,Add} = Slices.actions;
export default Slices.reducer;