import { createSlice } from "@reduxjs/toolkit";
// import { CreateBlogApi, getBlogApi } from "../Actions/BlogAction";
import { getUserApi, logInApi, logOutApi, registerApi } from "../Actions/userAction";


const initialState = {
    User:{},
    isLoading:false, 
    isAuth:false,
    isSuccess:false,
    errorMessage:"",  
    isRegisterSuccess:false,
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getUserApi.pending,(state)=>{
            state.isLoading = true;
        }),
        builder.addCase(getUserApi.fulfilled,(state,{payload})=>{
            state.isLoading= false;
            state.isSuccess= true;
            state.isAuth= payload.success;
            state.User= payload; 
        }),
        builder.addCase(getUserApi.rejected,(state,{payload})=>{
            state.isLoading= false;
            state.isSuccess= false;
            state.errorMessage = payload;
        })
        builder.addCase(logInApi.pending,(state)=>{
            state.isLoading = true;
        }),
        builder.addCase(logInApi.fulfilled,(state,{payload})=>{
            state.isLoading= false;
            state.isSuccess= true; 
            state.isAuth= payload.success;
            state.User= payload;
        }),
        builder.addCase(logInApi.rejected,(state,{payload})=>{
            state.isLoading= false;
            state.isSuccess= false;
            state.errorMessage = payload;
        })
        builder.addCase(logOutApi.pending,(state)=>{
            state.isLoading = true;
        }),
        builder.addCase(logOutApi.fulfilled,(state,{payload})=>{
            state.isLoading= false;
            state.isSuccess= true;
            state.isAuth= false;
            // state.User= payload;
        }),
        builder.addCase(logOutApi.rejected,(state,{payload})=>{
            state.isLoading= false;
            state.isSuccess= false;
            state.errorMessage = payload;
        })
        builder.addCase(registerApi.pending,(state)=>{
            state.isLoading = true;
        }),
        builder.addCase(registerApi.fulfilled,(state,{payload})=>{
            state.isLoading= false;
            state.isRegisterSuccess= true;
        }),
        builder.addCase(registerApi.rejected,(state,{payload})=>{
            state.isLoading= false;
            state.isRegisterSuccess = false;
            state.errorMessage = payload;
        })
    }
  
})





export default authSlice.reducer;