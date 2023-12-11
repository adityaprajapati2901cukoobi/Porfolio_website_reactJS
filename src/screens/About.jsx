import React from 'react';
import "../styles/About.scss";
import SkillUnits from '../components/SkillUnits';

const About = () => {
  return (
    <section className="MainContainer2 ">

        <article className="Article">
        I am a dedicated web developer specialized in ReactJS, with a strong focus on building dynamic and interactive user interfaces.A good experience in React components, state management, and modern frontend technologies, I excel my skills by creating seamless and engaging web applications. My passion lies in crafting scalable and optimized React solutions, ensuring exceptional user experiences and client satisfaction. I thrive in collaborative environments, leveraging my expertise to deliver innovative React-based projects. Eager to contribute my skills to your team and enhancing your digital presence and driving user engagement.
        </article>

        <div className="headerSkillTag">
          <p>&nbsp;My Skills!</p>
        </div>

        <div className="skillContainer">
          <SkillUnits Icon={"/icons/physics.png"} SkillName={'React JS'}/>
          <SkillUnits Icon={"/icons/atom.png"} SkillName={'React Native'}/>
          <SkillUnits Icon={"/icons/java1.png"} SkillName={'Core Java'}/>
          <SkillUnits Icon={"/icons/commit-git.png"} SkillName={'Git'}/>
          <SkillUnits Icon={"/icons/firebase.png"} SkillName={'Firebase'}/>
          <SkillUnits Icon={"/icons/sql-file.png"} SkillName={'SQL'}/>
          <SkillUnits Icon={"/icons/wind.png"} SkillName={'Tailwind & SCSS'}/>
          <SkillUnits Icon={"/icons/pattern.png"} SkillName={'Design Patterns Basics'}/>
        </div>
      
    </section>
  )
}

export default About;