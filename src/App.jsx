import React from "react"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { Routes,Route } from "react-router-dom";

const App=()=>{
    return(
        <>
        <Navbar/>
        <Home/>
        <About/>
        </>
    )
}
export default App;