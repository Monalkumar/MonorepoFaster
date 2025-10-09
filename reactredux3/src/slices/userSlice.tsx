import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// import { buildCreateApi } from "@reduxjs/toolkit/query";


interface User{
    id:string,
    name:string,
    email:string
}

interface UserState{
user:User | null,
loading:boolean,
error: string|null
}

const initialState : UserState={
    user:null,
    loading:false,
    error:null
}

export const fetchUser= createAsyncThunk(
"user/fetchUser",
    async(userId:string)=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const result = await response.json();
        return result
    }
)
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUser.pending,(state)=>{
           state.loading=true
        })
        .addCase(fetchUser.fulfilled,(state,action)=>{
       state.loading = false;
       state.user = action.payload
        })
        .addCase(fetchUser.rejected,(state)=>{
            state.loading = true;
            state.error="resolve this"
        })
    }
})

export default userSlice.reducer;