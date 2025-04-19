import { createSlice } from "@reduxjs/toolkit";

export const cartreducer = createSlice({
    initialState: [],
    name: "CartReducer",
    reducers: {
        addTocart: (state,action) => {
            const findProduct = state.find((product) => 
                product.id === action.payload.id
            )
            if (!findProduct){
                return [...state,action.payload]
            }
        },
        deletefromCart: (state,action) => {
            return state.filter((product) => 
                product.id !== action.payload.id
            )
        },
        increasequantity: (state,action) => {
            const findProduct = state.find(product => 
                product.id === action.payload.id
            );
            if(findProduct){
                findProduct.quantity += 1;
            }
        },
        decreasequantity: (state,action) => {
            const findproduct = state.find((product) =>
                product.id === action.payload.id
            );
            if(findproduct.quantity === 1){
                findproduct.quantity = 1;
            }else{
                findproduct.quantity -= 1;
            }
        },
        clearCart: (state,action) => {
            return [];
        }
    }
})
export const {addTocart,deletefromCart,increasequantity,decreasequantity,clearCart} = cartreducer.actions;
export default cartreducer.reducer;

