import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/users/userSlice.js"

const store = configureStore({
  reducer:{
    counter:counterReducer
  }
})

export default store;