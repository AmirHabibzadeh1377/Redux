import { createSlice } from "@reduxjs/toolkit";

const Slices = createSlice({
    name: "AddToCardSlice",
    initialState: {
        itemsList: [],
        toatalQauntity: 0,
        showCart: false
    },
    reducers: {
        AddToCart: (state, actions) => {
            const newItem = actions.payload;
            const existItem = state.itemsList.find((item) => item.id == newItem.id);
            if (existItem) {
                existItem.quantity++;
                existItem.price += newItem.price;
            }
            else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    name: newItem.name
                });

                state.toatalQauntity++;
            }
        },
        RemoveFromCart: (state, actions) => {
            const itemId = actions.payload.id;
            const existsItem = state.itemsList.find((item) => item.id == itemId);
            --existsItem.quantity;
            if(existsItem.quantity == 0){
                state.toatalQauntity--;
            }
        },
        setShowCart(state) {
            state.showCart = !state.showCart;
        }
    }
})

export const { AddToCart, setShowCart, RemoveFromCart } = Slices.actions;
export default Slices.reducer;