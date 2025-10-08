import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increament,decreament,increamentByAmount } from './features/users/userSlice.js'
import './App.css'

function App() {
 const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()
  

  return (
    
      <div>
       <h1>{count}</h1>
       <button onClick={()=>dispatch(increament())}>Increament</button>
       <button onClick={()=>dispatch(decreament())}>Decrement</button>
       <button onClick={()=>dispatch(increamentByAmount(5))}>Increament by Numbers</button>
      </div>
  )
}

export default App;
