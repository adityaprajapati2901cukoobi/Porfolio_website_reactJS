import React from "react"
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import About from "./screens/About";
import { Routes,Route } from "react-router-dom";
import "./styles/index.scss";
import Project from "./screens/Project";
import Contact from "./screens/Contact";

const App=()=>{
    return(
        <>
        <Navbar/>
        <Home/>
        <About/>
        <Project/>
        <Contact/>
        </>
    )
}
export default App;