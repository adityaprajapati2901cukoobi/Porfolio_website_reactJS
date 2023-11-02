import React from "react"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { Routes,Route } from "react-router-dom";
import "./styles/index.scss";

const App=()=>{
    return(
        <>
        <Navbar/>
        <Home/>
        <div className="loader-line"/>
        <About/>
        </>
    )
}
export default App;