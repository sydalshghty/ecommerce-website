import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllWishList = createAsyncThunk(
    "productReducer/getAllWishList", async () => {

        const res = await fetch(`wishList.json`);

        const data = await  res.json();

        return data
    }
)


export const WishListProducts = createSlice({
    initialState: [],
    name: "WishListProducts",
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getAllWishList.fulfilled, (state,action) => {

            return action.payload;

        })
    }
})

export const {} = WishListProducts.actions;
export default WishListProducts;