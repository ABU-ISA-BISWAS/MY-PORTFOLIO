import React, { useEffect, useState } from "react";
import "./Project.css";
import Project1 from '../img/aicomputer.png';
import Project2 from '../img/fruit.png';
import Project3 from '../img/dental.png';
import { Link } from 'react-router-dom';


function Project() {
    const [projects,setProjects]= useState({});

    useEffect(()=>{
        fetch('project.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    },[])
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading text-4xl font-bold project-text text-center font-serif">My Projects </h1>
        
        
      </div>

      
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">AI-Computer</h5>
                     <a href="https://computer-point-7ec78.web.app/" className="project__btn ">Visit Site</a>
                     

                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Fruit-warehouse</h5>
                     
                     <a href="https://fruits-warehouse-fffdc.web.app/" className="project__btn ">Visit Site</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Dental-Doctor</h5>
                    
                     <a href="https://dental-services-a744c.web.app/" className="project__btn">Visit Site</a>
                     </div>
                 </div>
             </div>



             
             

           </div>
       </div>
    </div>
  );
}

export default Project;
