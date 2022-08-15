import React from "react";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Nav from "./comp/Nav";
import Login from './comp/Login'
import Home from "./comp/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav/>}>
            <Route index element={<Home/>}/>
            <Route path="login/" element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
