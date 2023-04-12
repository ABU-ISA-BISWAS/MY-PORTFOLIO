import React, { useEffect } from "react";
import "./About.css";


import resume from "../img/resume.pdf";
import Aos from "aos";
import "aos/dist/aos.css";
import isa from '../img/bg-isa.png';
function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0)
  });
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div data-aos="zoom-in" className="col__2">
          <img className="image" src={isa} alt="" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                My name is Abu Isa and I am a web developer. I started web development in 2020 and acquired a strong knowledge and expertise in this field over time.

                For a more formal introduction, you can download my resume.
              </p>
              <h1>Here are a Few Highlights:</h1>
              <ul data-aos="fade-right">
                <li className="about__text  sweet">⚪ Full Stack web development</li>
                <li className="about__text  sweet">⚪ Interactive Front End as per the design</li>
                <li className="about__text  sweet">⚪ React</li>
                
                
                
              </ul>
              
             


              <div className="about__button d__flex align__items__center">
                <a href="#Contact">
                  <button  className=" button pointer">Hire Me</button>
                </a>
                <a href={resume} download="ABU-ISA resume.pdf">
                <button  className=" button pointer">Get Resume</button>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
