import React from 'react'
import "../styles/Home.scss"

const Home =()=>{

    return(
        <div className='FiguresBody'>
           <div className='Title'>
               <p className='Header'>Hi i'm Aditya Prajapati </p>
               <p className="description">I develop Web Applications and Mobile Applications</p>
          </div>
           <div className="ellipse1">
                <img className="circle1" src="/icons/coding.png" alt="1" />
           </div>
           <div className="ellipse2">
                <img className="circle2" src="/icons/sql.png" alt="5" />
           </div>
           <div className="ellipse3">
                <img className="circle3" src="/icons/java.png" alt="3" />
           </div>
           <div className="ellipse4">
                <img className="circle4" src="/icons/structure.png" alt="5" />
                <img className="circle5" src="/icons/git.png" alt="7" />
           </div>
        </div>
    );
}
export default Home;
