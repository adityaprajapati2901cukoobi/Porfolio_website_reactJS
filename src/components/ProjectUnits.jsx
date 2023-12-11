import React from "react";
import "../styles/componentscss/ProjectUnits.scss";

const ProjectUnits =({image,Attribute,link})=>{
    return(
        <div className="MainContainerProjectUnit">
            <div>
                <img src={image} id="image" className="ProjectImage"/>
            </div>
            <div>
                <p className="article">{Attribute}</p>
            </div>
            <div className="third">
                <a className="to" href={link}>
                    <img src={'/icons/social.png'} alt="" className="icon"/>
                </a>
            </div>
        </div>
    )
}
export default ProjectUnits;
