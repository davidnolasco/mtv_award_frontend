import  Home  from "../src/components/Pages/Home/Home.js";
import  Vote  from "../src/components/Pages/Vote/Vote.js";
import SignIn from "./components/Pages/SignIn/SignIn.js";
import Login from "./components/Pages/Login/Login.js";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/"  element={<Home/>} />
        <Route exact path="/users/signin"  element={<SignIn/>} />
        <Route exact path="/users/login"  element={<Login/>} />
        <Route exact path="/users/vote"  element={<Vote/>} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
