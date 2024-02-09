import ThemeSlice from "./ThemeSlice";

// const { configureStore } = require("@reduxjs/toolkit");
import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./dataSlice";

const Store= configureStore({
    reducer:{
        theme: ThemeSlice,
        data: DataSlice
    }
 }
)
export default Store;