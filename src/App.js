import React, { useEffect, useState,createContext } from "react";
import { Link } from "react-router-dom";
import "./Home/Home.css";

import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { RiHomeGearFill } from 'react-icons/ri';
import { FcAbout } from 'react-icons/fc';
import {AiFillProject } from 'react-icons/ai';
import {GrMail} from 'react-icons/gr';
import {ImBlog} from 'react-icons/im';
import Aos from "aos";
import "aos/dist/aos.css";

import ReactSwitch from "react-switch";




import { Route, Routes } from "react-router-dom";

import "./App.css";
import Blogs from "./Blogs";
import Main from "./Home/Main";



export const ThemeContext = createContext(null);










function App() {
       // fixed Header
       window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        header.classList.toggle("active", window.scrollY > 0);
      });
    
      // Toogle Menu
    
      const [show, setShow] = useState(false);
      useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);


  const [theme,setTheme] =useState("dark");
  const toggleTheme =()=>{
    setTheme((curr)=>(curr === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      
      <div className="App" id={theme} >
      <div>
             <div class="navbar nav-bg">
          <div class="navbar-start">
            <div class="dropdown">
              <label tabindex="0" class=" menu lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52">
                <li className="text nav__items mx__15 hover"><a href="#Home"><RiHomeGearFill /> Home</a></li>
                <li className="text nav__items mx__15 hover"><a href="#About"><FcAbout />About</a></li>
                <li className="text nav__items mx__15 hover"><a href="#Portfolio"><AiFillProject />Projects</a></li>
                <li className="text nav__items mx__15 hover"> <Link to="/blogs"><ImBlog />Blogs</Link> </li>
                <li className="text nav__items mx__15 hover"><a href="#Contact"><GrMail />Contact Me</a></li>
                <li className="text nav__items mx__15 hover"><a href="https://www.facebook.com/bmabuisa.cse/"><FaFacebook /></a></li>
                <li className="text nav__items mx__15 hover"><a href="https://www.linkedin.com/in/abu-isa-09377b168/"><FaLinkedin /></a></li>
                <li className="text nav__items mx__15 hover"><a href="https://github.com/ABU-ISA-BISWAS"><FaGithub /></a></li>
               <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}></ReactSwitch>
                
              </ul>
             
            </div>

          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
              <li className="text nav__items mx__15 hover"><a href="#Home"><RiHomeGearFill />Home</a></li>
              <li className="text nav__items mx__15 hover"><a href="#About"><FcAbout />About</a></li>
              <li className="text nav__items mx__15 hover"><a href="#Portfolio"><AiFillProject />Projects</a></li>
              <li className="text nav__items mx__15 hover"> <Link to="/blogs"><ImBlog />Blogs</Link> </li>
              <li className="text nav__items mx__15 hover"><a href="#Contact"><GrMail />Contact Me</a></li>
              <li className="text nav__items mx__15 hover"><a href="https://www.facebook.com/bmabuisa.cse/"><FaFacebook /></a></li>
              <li className="text nav__items mx__15 hover"><a href="https://www.linkedin.com/in/abu-isa-09377b168/"><FaLinkedin /></a></li>
              <li className="text nav__items mx__15 hover"><a href="https://github.com/ABU-ISA-BISWAS"><FaGithub /></a></li>
              
            </ul>
            <div className="ml-32 switch"><ReactSwitch onChange={toggleTheme} checked={theme === "dark"}></ReactSwitch></div>
            
          </div>
          <div class="navbar-end">
     
          </div>
        </div>
        </div>
      
     <Routes>
      <Route  path='/' element={<Main></Main>}></Route>
      
      <Route path="/blogs" element={<Blogs></Blogs>}></Route>
     </Routes>
    
    </div>

    </ThemeContext.Provider>
    
  );
}

export default App;
