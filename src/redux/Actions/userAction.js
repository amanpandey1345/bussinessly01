import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserApi = createAsyncThunk(
  "auth/getUserApi",
  async (pincode, { rejectWithValue }) => {
    // console.log(pincode);

    try {
      const { data } = await axios.get(`https://quzis.onrender.com/api/v1/me`, {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      rejectWithValue(error.response.data.message);
    }
  }
);
export const logInApi = createAsyncThunk(
  "auth/logInApi",
  async ({ email, password }, { rejectWithValue }) => {
    // console.log(pincode);

    try {
      const { data } = await axios.post(
        `https://quzis.onrender.com/api/v1/login`,
        {
          email,
          password,
        },   
        {
        
          withCredentials: true,
        }
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data.message);
    }
  }
);
export const registerApi = createAsyncThunk(
  "auth/registerApi",
  async (formdata ,{ rejectWithValue }) => {
    // console.log(pincode);

    try {    
      const { data } = await axios.post(
        `https://quzis.onrender.com/api/v1/register`,
       formdata,   
        {
            headers:{
                "Content-Type":"multipart/form-data"
            },
          withCredentials: true,
        }
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data.message);
    }
  }
);
export const logOutApi = createAsyncThunk(
  "auth/logOutApi",
  async (dad, { rejectWithValue }) => {
    // console.log(pincode);

    try {
      const { data } = await axios.get(
        `https://quzis.onrender.com/api/v1/logout`,
        {
          withCredentials: true,
        }
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data.message);
    }
  }
);
