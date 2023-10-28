import React,{useState} from "react";
import "../styles/Navbar.scss"
const Navbar=()=>{
    const [menu,setMenu]=useState(false);
   
    const dropMenu=()=>{
        setMenu(!menu)
    }
    return(
        <nav>
            <div className="nav-section-1">
                <img src="/icons/a.png" alt="label" />
                <label htmlFor="title">&nbsp;&nbsp;Aditya | ReactJS Mastery</label>
            </div>
            <div className="nav-section-2">
                <ol className="i-am-not-hidden">
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
                    <a href="#">Resume</a>
                </ol>
            </div>
            <div className="nav-section-3-hidden">
                <img src={menu ? "/icons/close.png": "/icons/menu.png"} onClick={dropMenu}/>
                 {menu && (
                    <div className="MenuDiv">
                        <ol className="droppedMenu">
                            <a href="#">About</a>
                            <a href="#">Projects</a>
                            <a href="#">Contact</a>
                            <a href="#">Resume</a>
                        </ol> 
                    </div>
                 )}
            </div>
        </nav>
    )
}
export default Navbar;