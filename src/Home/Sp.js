import React from 'react';
import "./Project.css";

const Sp = ({project}) => {
    return (
    <div  className="row">
            <div className="col__3">
        <div className="project__box pointer relative">
            <div className="project__box__img pointer relative">
                <div className="project__img__box">
                    <img src={project.img2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
            </div>
            <div className="project__meta absolute">
            <h5 className="project__text">{project.name}</h5>
           
            <a href="https://dental-services-a744c.web.app/" className="project__btn">View Details</a>
            </div>
        </div>
    </div>
    </div>
    );
};

export default Sp;