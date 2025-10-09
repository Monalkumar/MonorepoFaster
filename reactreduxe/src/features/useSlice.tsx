import {createSlice} from "@reduxjs/toolkit";

interface CounterState{
    value:number
}

const initialState:CounterState={
    value:0 
}
const counterSlice = createSlice({
    initialState,
    name :"counter",
    reducers:{
        increament:(state)=>{
         state.value = state.value+1
        },
        decreament:(state)=>{
            state.value = state.value-1
        },
        reset:(state)=>{
            state.value = 0
        }
    }
})

export const{increament,decreament,reset} = counterSlice.actions;
export default counterSlice.reducer;