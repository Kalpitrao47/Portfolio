import ThemeSlice from "./ThemeSlice";

// const { configureStore } = require("@reduxjs/toolkit");
import { configureStore } from "@reduxjs/toolkit";

const Store= configureStore({
    reducer:{
        theme: ThemeSlice
    }
 }
)
export default Store;