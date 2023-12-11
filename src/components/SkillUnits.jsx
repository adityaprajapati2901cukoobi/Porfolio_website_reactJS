import React from 'react';
import "../styles/componentscss/SkillUnit.scss";

const SkillUnits = ({Icon,SkillName}) =>{
    return (
        <div className="MainUnit">
            <img src={Icon} alt="skill"/>
            <p>{SkillName}</p>
        </div>
    );
}
export default SkillUnits;