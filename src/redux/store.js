import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./ReduxSlice/Counter.Slice";
import PostalReducer from "./ReduxSlice/Postal.Slice";




const store = configureStore({
   reducer:{
    counter:CounterReducer,
    postal:PostalReducer,   
   }
   
})


export default store