import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const getAllBestProducts = createAsyncThunk(
    "bestProductsReducer/getAllBestProducts", async () => {
        const res = await fetch("bestProducts.json");

        const data = await res.json();

        return data;
    }
)
export const bestProductsReducer = createSlice({
    initialState: [],
    name: "bestProducts",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllBestProducts.fulfilled, (state,action) => {
            return action.payload;
        })
    }
})
export const {} = bestProductsReducer.actions;
export default bestProductsReducer.reducer;
