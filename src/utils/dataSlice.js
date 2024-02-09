// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";

const DataSlice= createSlice({
    name: "theme",
    initialState: 
    {
        data:[]
    },
    reducers:{
        getProductData:(state, action)=>{
            console.log("actions===",action.payload);
            state.data = action.payload;
        }
    }
})

export default DataSlice.reducer;

export const {
    getProductData
}= DataSlice.actions