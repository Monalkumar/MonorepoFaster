import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import { increament,decreament,reset } from './features/useSlice';
import type  {  RootState,AppDispatch } from "./app.store.tsx";
import './App.css'

const App:React.FC=()=> {
  const count = useSelector((state:RootState)=>state.counter.value);
  const dispatch = useDispatch<AppDispatch>()
return (
    <>
      <div>
       <h1>{count}</h1>
       <button onClick={()=>dispatch(increament())}>Increament</button>
       <button onClick={()=>dispatch(decreament())}>Decreament</button>
       <button onClick={()=>dispatch(reset())}>Reset</button>
      </div>
      
    </>
  )
}

export default App
 