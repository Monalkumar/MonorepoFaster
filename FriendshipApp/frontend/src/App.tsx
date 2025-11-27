import Body from "./components/Body.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';


function App() {


  return (
   <div>
    <BrowserRouter basename="/">
        <Routes >
          <Route path="/" element={<Body />} >
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <h1>Chats App</h1>

    </div>

  )
}

export default App
