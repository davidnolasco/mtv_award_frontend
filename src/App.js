import  Home  from "../src/components/Pages/Home/Home.js";
import  Vote  from "../src/components/Pages/Vote/Vote.js";
import SignIn from "./components/Pages/SignIn/SignIn.js";
import Login from "./components/Pages/Login/Login.js";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import { Provider } from "react-redux";
import store from "./components/store/store.js";

import './App.css';

function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Routes>
          <Route exact path="/"  element={<Home/>} />
          <Route exact path="/users/signin"  element={<SignIn/>} />
          <Route exact path="/users/login"  element={<Login/>} />
          <Route exact path="/users/vote"  element={<Vote/>} />
        </Routes>
      </BrowserRouter> 
    </Provider>
  );
}

export default App;
