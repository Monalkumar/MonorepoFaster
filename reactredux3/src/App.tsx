import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from "./slices/userSlice";
import type { RootState,AppDispatch } from "./app/store";
import './App.css'

const App: React.FC = () => {
  const { user, loading, error } = useSelector((state: RootState) => state.user);
  const dispatch=useDispatch<AppDispatch>()


  return(
   
  <div>
         <h2>👤 Fetch User Data (Redux Toolkit + TS)</h2>

      <button onClick={() => dispatch(fetchUser("1"))}>
        Fetch User 1
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && (
        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        
      </div>)}
      </div>
      )}
      
      

export default App;
