import React, { useEffect, useState } from "react";
import "./Home.css";
import resume from "../img/resume.pdf";
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import {FaGithub } from 'react-icons/fa';
import Aos from "aos";
import "aos/dist/aos.css";


function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  // Toogle Menu

  const [show, setShow] = useState(false);
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
          
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15 hover">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15 hover">About</li>
              </a>
            
              <a href="#Portfolio">
                <li className="nav__items mx__15 hover">Projects</li>
              </a>
             
              <a href="#Contact">
                <li className="nav__items mx__15 hover">Contact</li>
              </a>
              <a href="https://www.facebook.com/bmabuisa.cse/">
                <li className="nav__items mx__15 hover"><FaFacebook /></li>
              </a>
              <a href="https://www.linkedin.com/in/abu-isa-09377b168/">
                <li className="nav__items mx__15 hover"><FaLinkedin /></li>
              </a>
              
              <a href="https://github.com/ABU-ISA-BISWAS">
                <li className="nav__items mx__15 hover"><FaGithub /></li>
              </a>
            </ul>
          </div>

          {/* Toogle Menu */}

          <div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar hover">
                  <a href="#Home">Home</a>
                </li>
                <li className="sideNavbar hover">
                  <a href="#About">About</a>
                </li>
               
                <li className="sideNavbar hover">
                  <a href="#Portfolio">Projects</a>
                </li>
               
                <li className="sideNavbar hover">
                  <a href="#Contact">Contact</a>
                </li>
                <li className="sideNavbar hover">
                  <a href="https://www.facebook.com/bmabuisa.cse/"><FaFacebook /></a>
                </li>
                <li className="sideNavbar hover">
                  <a href="https://www.linkedin.com/in/abu-isa-09377b168/"><FaLinkedin /></a>
                </li>
                <li className="sideNavbar hover">
                  <a href="https://github.com/ABU-ISA-BISWAS"><FaGithub /></a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>

        {/* HOME CONTENT */}

        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 data-aos="fade-down" className="home__text pz__10">WELCOME</h1>
              <h2 data-aos="fade-up" className="home__text sweet pz__10">Hi, I’m Abu Isa</h2>
              <h3 data-aos="fade-left" className="home__text  pz__10 mb-4">Web Developer</h3>
              <a href={resume} download="ABU-ISA resume.pdf" className="mt-4">
                <button className=" button ">Get Resume</button>
              </a>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
