import React from 'react'
import ProjectUnits from '../components/ProjectUnits';
import "../styles/Project.scss";

const Project =()=> {
  const Attribute={
    newApp: "New Web Application based on ReactJS with Firebase Authentication. This web app enables user, read news from world wide without ads and login abandunce.",
    kajriApp:"Kajri Application built with React Native and Firebase. This app is encricled around the concept of Physical NFT and GI Products focuses on sustainable ecosystem.",
    portfolioApp:"My Portfolio Web Application made with ReactJS and SCSS. This web app represents my skills and passion about development, various application."
  } 
  return (
    <div className="MainContainerProject">
      <div>
        <p className="MainHeader">My Projects</p>
      </div>
      <div className="units">
        <ProjectUnits image={"/background/newApp.png"} Attribute={Attribute.newApp} link={'https://github.com/adityaprajapati2901cukoobi/Cukoobee-news-vite-version2'}/>
        <ProjectUnits image={"/background/kajri.jpg"} Attribute={Attribute.kajriApp} link={'https://github.com/adityaprajapati2901cukoobi/Prebuilt_kajri'}/>
        <ProjectUnits image={"/background/profile.png"} Attribute={Attribute.portfolioApp} link={'https://github.com/adityaprajapati2901cukoobi/Porfolio_website_reactJS'}/>
      </div>
    </div>
  )
}
export default Project;
