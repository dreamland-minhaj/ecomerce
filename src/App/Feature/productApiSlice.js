import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/api";

export const addNewProduct = createAsyncThunk("product/addNewProduct", async(data)=>{
   try {
    const response = await axiosInstance.post("products",data);
    return response.data;
   } catch (error) {
      throw new Error(error.message);
   }
});

export const getAllProduct = createAsyncThunk("product/getAllProduct", async()=>{
    try {
     const response = await axiosInstance.get("products");
     return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
 });

 export const deleteProduct = createAsyncThunk("product/deleteProduct", async(id)=>{
   try {
    const response = await axiosInstance.delete(`products/${id}`);
    return response.data;
   } catch (error) {
      throw new Error(error.message);
   }
});

export const updateProduct = createAsyncThunk("product/updateProduct", async(data)=>{
   try {
    const response = await axiosInstance.put(`products/${data.id}`,data);
    return response.data;
   } catch (error) {
      throw new Error(error.message);
   }
});

