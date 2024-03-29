import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./ReduxSlice/Counter.Slice";
import PostalReducer from "./ReduxSlice/Postal.Slice";
import BlogReducer from "./ReduxSlice/BlogSlice";
import authReducer from "./ReduxSlice/User.Slice"
// import BlogReducer from "./ReduxSlice/BlogSlice";




const store = configureStore({
   reducer:{
    counter:CounterReducer,   
    blog:BlogReducer,   
    postal:PostalReducer,   
    auth:authReducer
   }
   
})


export default store 