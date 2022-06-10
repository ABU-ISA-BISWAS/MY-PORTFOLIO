

import { Route, Routes } from "react-router-dom";
import About from "./About";
import "./App.css";
// import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Project from "./Project";
import ProjectDetail from "./ProjectDetail";



function App() {
  return (
    <div className="App">
       <Home />
       <About />
       
       <Project />
       
       <Contact />
       <Footer />
     <Routes>
      <Route path="/project-detail" element={<ProjectDetail></ProjectDetail>}></Route>
     
     </Routes>
    </div>
  );
}

export default App;
