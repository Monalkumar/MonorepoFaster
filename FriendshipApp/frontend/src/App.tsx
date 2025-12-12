import Body from "./components/Body.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import Feed from "./components/Feed.jsx"
import Signup from "./components/Signup.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';


const App:React.FC=()=> {


  return (
   <div>
    <BrowserRouter basename="/">
        <Routes >
          <Route path="/" element={<Body/>} >
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
