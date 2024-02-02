import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./ReduxSlice/Counter.Slice";




const store = configureStore({
   reducer:{
    counter:CounterReducer
   }
   
})


export default store