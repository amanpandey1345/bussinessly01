import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getUserApi = createAsyncThunk(
    "auth/getUserApi",
    async(pincode,{rejectWithValue})=>{

        // console.log(pincode);

        try {
            const {data} = await axios.get(`https://quzis.onrender.com/api/v1/me`)
            return data
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)
export const logInApi = createAsyncThunk(
    "auth/logInApi",
    async({email,password},{rejectWithValue})=>{

        // console.log(pincode);

        try {
            const {data} = await axios.post(`https://quzis.onrender.com/api/v1/login`, {
               email,
               password
              })
            return data
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)
export const logOutApi = createAsyncThunk(
    "auth/logOutApi",
    async(dad,{rejectWithValue})=>{

        // console.log(pincode);

        try {
            const {data} = await axios.get(`https://quzis.onrender.com/api/v1/logout`)
            return data
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)