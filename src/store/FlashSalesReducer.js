import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getAllFlashSaeles = createAsyncThunk(
    "flasSalesReducer/getAllFlashSaeles", async () => {
        const res = await fetch(`flashSales.json`);

        const data = await res.json();
        
        return data;
    }
)
export const flasSalesReducer = createSlice({
    initialState: [],
    name: "flashSales",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllFlashSaeles.fulfilled, (stat,action) => {
            return action.payload;
        })
    }
})

export const {} = flasSalesReducer.actions;

export default flasSalesReducer.reducer;