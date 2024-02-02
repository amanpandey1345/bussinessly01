import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



// export const getPostalApi = createAsyncThunk(
//     "postal/getapi",
//     async({pincode},{rejectWithValue})=>{

//         try {
//             const {data} = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`)
//         } catch (error) {
            
//         }
//     }
// )