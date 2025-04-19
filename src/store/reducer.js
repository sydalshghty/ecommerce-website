import { createSlice } from "@reduxjs/toolkit";

const reducerHeart = createSlice({
    initialState: 0,
    name: "reducerHeart",
    reducers: {
        IncreamentHeart: (state,action) => {
            return state + action.payload
        }
    }
})

export const {IncreamentHeart} = reducerHeart.actions;
export default reducerHeart.reducer;