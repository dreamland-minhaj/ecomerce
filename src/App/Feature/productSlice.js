import { createSlice } from "@reduxjs/toolkit";
import { addNewProduct, deleteProduct, getAllProduct, updateProduct } from "./productApiSlice";


const productSlice = createSlice({
    name : "product",
    initialState : {
        products : [],
        messege : null,
        error : null,
        loading : false,
        success : null,
        isModalOpen : false,
        updateModal : false,
    },
    reducers : {
        modalOpen : (state)=>{
            state.isModalOpen = true
        },
        modalClose : (state)=>{
            state.isModalOpen = false
        },
        updateModalOpen : (state)=>{
            state.updateModal = true
        },
        updateModalClose : (state)=>{
            state.updateModal = false
        },
        loadingStart : (state)=>{
            state.loading = true;
        }
    },
    extraReducers : (builder)=>{
        builder
        .addCase(addNewProduct.fulfilled, (state,action)=>{
            state.products.push(action.payload);
            state.loading = false;
        })
        .addCase(getAllProduct.fulfilled, (state,action)=>{
            state.products = action.payload;
            state.loading = false;
        })
        .addCase(deleteProduct.fulfilled,(state,action)=>{
            state.products = state.products.filter((data)=>data.id !== action.payload);
            state.loading = false;
        })
        .addCase(updateProduct.fulfilled,(state,action)=>{
            state.products = state.products.map((data)=>data.id === action.payload.id ? action.payload : data);
            state.loading = false;
        })

    }
});


export const {modalClose,modalOpen,loadingStart,updateModalOpen,updateModalClose} = productSlice.actions;
//export slice as default
export default productSlice.reducer;