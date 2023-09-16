import { createSlice } from "@reduxjs/toolkit";

const Slices = createSlice({
    name: "AddToCardSlice",
    initialState: {
       itemsList:[],
       toatalQauntity:0,
       showCart:false
    },
    reducers: {
        AddToCart: (state,actions) => {
            const newItem = actions.payload;
            const existItem = state.itemsList.find((item)=> item.id == newItem.id);
            if(existItem){
                existItem.quantity ++;
                existItem.price += newItem.price;
                
            }
            else{
                state.itemsList.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity :1
                });
                
                state.toatalQauntity ++;
            }
        },
        setShowCart(state){
            state.showCart=true;
        }
    }
})

export const {AddToCart , setShowCart} = Slices.actions;
export default Slices.reducer;