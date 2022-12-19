import React from "react";
import Login from "./Login";
import Signup from './Signup';
import Welcome from "./Welcome";
import { BrowserRouter, Routes, Route} from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Welcome/>}/>    
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
