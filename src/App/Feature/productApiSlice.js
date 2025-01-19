import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addNewProduct = createAsyncThunk("product/addNewProduct", async(data)=>{
   try {
    const response = await axios.post("http://localhost:5050/Products",data);
    return response.data;
   } catch (error) {
    throw new error(error.messege);
   }
});

export const getAllProduct = createAsyncThunk("product/getAllProduct", async()=>{
    try {
     const response = await axios.get("http://localhost:5050/Products");
     return response.data;
    } catch (error) {
     throw new error(error.messege);
    }
 });

 export const deleteProduct = createAsyncThunk("product/deleteProduct", async(id)=>{
   try {
    const response = await axios.delete(`http://localhost:5050/Products/${id}`);
    return response.data;
   } catch (error) {
    throw new error(error.messege);
   }
});

export const updateProduct = createAsyncThunk("product/updateProduct", async(data)=>{
   try {
    const response = await axios.put(`http://localhost:5050/Products/${data.id}`,data);
    return response.data;
   } catch (error) {
    throw new error(error.messege);
   }
});

