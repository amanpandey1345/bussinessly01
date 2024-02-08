import { createSlice } from "@reduxjs/toolkit";
import { CreateBlogApi, getBlogApi } from "../Actions/BlogAction";


const initialState ={
    posts:{},
    isLoading:false,
    isSuccess:false,
    errorMessage:""
}

const BlogSlice = createSlice({
    name:"blog",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getBlogApi.pending,(state)=>{
            state.isLoading = true;
        }),
        builder.addCase(getBlogApi.fulfilled,(state,{payload})=>{
            state.isLoading= false;
            state.isSuccess= true;
            state.posts= payload;
        }),
        builder.addCase(getBlogApi.rejected,(state,{payload})=>{
            state.isLoading= false;
            state.isSuccess= false;
            state.errorMessage = payload;
        })
        builder.addCase(CreateBlogApi.pending,(state)=>{
            state.isLoading = true;
        }),
        builder.addCase(CreateBlogApi.fulfilled,(state,{payload})=>{
            state.isLoading= false;
            state.isSuccess= true;
            state.posts= payload;
        }),
        builder.addCase(CreateBlogApi.rejected,(state,{payload})=>{
            state.isLoading= false;
            state.isSuccess= false;
            state.errorMessage = payload;
        })
    }
  
})





export default BlogSlice.reducer;