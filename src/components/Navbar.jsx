import React,{useState} from "react";
import "../styles/componentscss/Navbar.scss";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar=()=>{
    const [menu,setMenu]=useState(false);

    const resumeFileName = "/Resume.pdf";
   
    const dropMenu=()=>{
        setMenu(!menu)
    }
    setTimeout(()=>{
        setMenu(!menu);
    },5000)
    
    return(
        <nav>
            <div className="nav-section-1">
                <img src="/icons/a.png" alt="label" />
                <label htmlFor="title">&nbsp;&nbsp;Aditya | ReactJS Mastery</label>
            </div>
            <div className="nav-section-2">
                <ol className="i-am-not-hidden">
                    <ScrollLink className="a" to="about" spy={true} smooth={true} offset={-70} duration={500} style={{cursor:"pointer"}}>About</ScrollLink>
                    <ScrollLink className="a" to="projects" spy={true} smooth={true} offset={-70} duration={500} style={{cursor:"pointer"}}>Projects</ScrollLink>
                    <ScrollLink className="a" to="contact" spy={true} smooth={true} offset={-70} duration={500} style={{cursor:"pointer"}}>Contact</ScrollLink>
                    <a className="a" href={resumeFileName} download >Resume</a>
                </ol>
            </div>
            <div className="nav-section-3-hidden">
                <img src={menu ? "/icons/close.png": "/icons/menu.png"} onClick={dropMenu}/>
                 {menu && (
                    <div className="MenuDiv">
                        <ol className="droppedMenu">
                            <ScrollLink className="a" to="about" spy={true} smooth={true} offset={-70} duration={500} style={{cursor:"pointer"}}>About</ScrollLink>
                            <ScrollLink className="a" to="projects" spy={true} smooth={true} offset={-70} duration={500} style={{cursor:"pointer"}}>Projects</ScrollLink>
                            <ScrollLink  className="a" to="contact" spy={true} smooth={true} offset={-70} duration={500} style={{cursor:"pointer"}}>Contact</ScrollLink>
                            <a className="a" href={resumeFileName} download >Resume</a>
                        </ol> 
                    </div>
                 )}
            </div>
        </nav>
    )
}
export default Navbar;