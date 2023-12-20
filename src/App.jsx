import React from "react"
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import About from "./screens/About";
import "./styles/index.scss";
import Project from "./screens/Project";
import Contact from "./screens/Contact";

const App=()=>{
    
    return(
        <>
            <Navbar/>
            <Home/>
            <div id="about" > 
                <About/> 
            </div>
            <div id="projects">
                <Project/>
            </div>
            <div id="contact">
                <Contact/>
            </div>
        </>
    )
}
export default App;