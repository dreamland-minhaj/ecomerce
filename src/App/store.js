import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Feature/productSlice"

const store = configureStore({
   reducer : {
    product : productReducer
   },
   middleware : (getDefaultMiddleWare) => getDefaultMiddleWare(),
   devTools : true

});

export default store;