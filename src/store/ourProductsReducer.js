import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getOurProducts = createAsyncThunk(
    "ProductsReducer/getOurProducts", async () => {
        const res = await fetch("ourProducts.json");

        const data = await res.json();

        return data;
    }
)

export const ProductsReducer = createSlice({
    initialState: [],
    name: "Products-Reducer",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOurProducts.fulfilled, (state,action) => {
            return action.payload;
        })
    }
})

export const {} = ProductsReducer.actions;
export default ProductsReducer.reducer;