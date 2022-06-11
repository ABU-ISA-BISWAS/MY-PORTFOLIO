
import "./Project.css";
import Project1 from '../img/aicomputer.png';
import Project2 from '../img/fruit.png';
import Project3 from '../img/dental.png';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



function Project() {
    useEffect(()=>{
        Aos.init({duration:2000});
      },[]);

    return (
        <div className="project component__space" id="Portfolio">
            <div className="heading">
                <h2 className="heading text-5xl font-bold project-text text-center font-serif">My Projects </h2>


            </div>


            <div className="container">
                <div className="row">

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img data-aos="zoom-in" src={Project1} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>

                        </div>
                        <a data-aos="fade-right" href="https://computer-point-7ec78.web.app/" className="project__btn font-mono">Visit Site</a>
                        <div className="text-center ">
                            <button data-aos="fade-up" class="btn btn-xs mr-2"><a href="https://github.com/ABU-ISA-BISWAS/AICOMPUTER" >client-side</a></button>
                            <button data-aos="fade-up" class="btn btn-xs "><a href="https://github.com/ABU-ISA-BISWAS/AICOMPUTER-SERVER" >server-side</a></button>

                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img data-aos="zoom-in" src={Project2} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>

                        </div>
                        <a data-aos="fade-right" href="https://fruits-warehouse-fffdc.web.app/" className="project__btn font-mono">Visit Site</a>
                        <div className="text-center ">
                            <button data-aos="fade-up" class="btn btn-xs mr-2"><a href="https://github.com/ABU-ISA-BISWAS/Fruit-warehouse-client" >client-side</a></button>
                            <button data-aos="fade-up" class="btn btn-xs "><a href="https://github.com/ABU-ISA-BISWAS/Fruit-warehouse-server" >server-side</a></button>

                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img data-aos="zoom-in" src={Project3} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>

                        </div>
                        <a data-aos="fade-right" href="https://dental-services-a744c.web.app/" className="project__btn font-mono ">Visit Site</a>
                        <div className="text-center ">
                            <button data-aos="fade-up" class="btn btn-xs mr-2"><a href="https://github.com/ABU-ISA-BISWAS/Dental-doctor" >client-side</a></button>
                           

                        </div>
                    </div>






                </div>
            </div>
        </div>
    );
}

export default Project;
