import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Project.css";

const Sp = ({project}) => {
    const navigate=useNavigate();
    const navigateToProjectDetail=id=>{
        navigate(`/project-detail/${id}`)
    }
    return (
    
            <div className="col__3">
        <div className="project__box pointer relative">
            <div className="project__box__img pointer relative">
                <div className="project__img__box">
                    <img src={project.img0} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
            </div>
            <div className="project__meta absolute">
            <h5 className="project__text">{project.name}</h5>
           
            <button href='' onClick={()=>navigateToProjectDetail(project.id)} className="project__btn">View Details</button>
            </div>
        </div>
    </div>
   
    );
};

export default Sp;