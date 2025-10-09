import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increamment } from './features/users/userSlice';

import './App.css'

function App() {
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch()
 
  

  return (
    
      <div>
      <h1> राधे राधे</h1>
       <h1>{count}</h1>
       <button onClick={()=>dispatch(increamment())}>नाम जप</button>
       
       
      </div>
  )
}

export default App;
