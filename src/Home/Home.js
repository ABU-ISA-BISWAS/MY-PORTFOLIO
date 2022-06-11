import React, { useEffect, useState } from "react";

import "./Home.css";
import resume from "../img/resume.pdf";

import Aos from "aos";
import "aos/dist/aos.css";
import isa from '../img/bg-isa.png';




function Home() {

 
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        {/* *************** */}

       

        {/* HOME CONTENT */}

        <div className="lg:flex-row mx-10 flex-col  items">
          <div className="container">
            <div className="home__content">
              <div className="home__meta">
                <h1 data-aos="fade-down" className="welcome pz__10">WELCOME</h1>
                <h2 data-aos="fade-up" className="home__text sweet pz__10">Hi, I’m Abu Isa</h2>
                <h3 data-aos="fade-left" className="web-dev  pz__10 mb-4">Web Developer</h3>
                <a href={resume} download="ABU-ISA resume.pdf" className="mt-4">
                  <button className=" button ">Get Resume</button>
                </a>


              </div>
            </div>
          </div>
          <div >
            <img data-aos="zoom-in" className="img" src={isa} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
