import React from 'react'
import "../styles/Home.scss"

const Home =()=>{

    return(
        <div className='FiguresBody'>
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
          <div className='Title'>
               <h3 className="header"><p className="hi">Hi&nbsp;&nbsp;i am</p><p className='Name'>&nbsp;&nbsp;Aditya Prajapati &nbsp;&nbsp;</p></h3>
              <p className="description">I develop Web Applications and Mobile Applications</p>
          </div>
        </div>
    );
}
export default Home;
