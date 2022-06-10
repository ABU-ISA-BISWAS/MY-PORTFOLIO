



import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Home/Main";
import ProjectDetail from "./Home/ProjectDetail";










function App() {
  return (
    <div className="App">
     <Routes>
      <Route  path='/' element={<Main></Main>}></Route>
      
      <Route path='/project-detail/:Id' element={<ProjectDetail></ProjectDetail>}></Route>
     </Routes>
    
    </div>
  );
}

export default App;
