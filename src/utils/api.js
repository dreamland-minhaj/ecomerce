import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://apidata-09bi.onrender.com/"
  });
