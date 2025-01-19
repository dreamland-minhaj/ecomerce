import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addNewProduct = createAsyncThunk("product/addNewProduct", async(data)=>{
   try {
    const response = await axios.post("https://apidata-09bi.onrender.com/products",data);
    return response.data;
   } catch (error) {
    throw new error(error.messege);
   }
});

export const getAllProduct = createAsyncThunk("product/getAllProduct", async()=>{
    try {
     const response = await axios.get("https://apidata-09bi.onrender.com/products");
     return response.data;
    } catch (error) {
     throw new error(error.messege);
    }
 });

 export const deleteProduct = createAsyncThunk("product/deleteProduct", async(id)=>{
   try {
    const response = await axios.delete(`https://apidata-09bi.onrender.com/products/${id}`);
    return response.data;
   } catch (error) {
    throw new error(error.messege);
   }
});

export const updateProduct = createAsyncThunk("product/updateProduct", async(data)=>{
   try {
    const response = await axios.put(`https://apidata-09bi.onrender.com/products${data.id}`,data);
    return response.data;
   } catch (error) {
    throw new error(error.messege);
   }
});

