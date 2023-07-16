import React from 'react';
import {Route,Routes} from "react-router-dom";
import Main from "./Pages/Main/Main";
import Blogs from './Pages/Blogs/Blogs';
import BlogDetails from './Pages/BlogDetails/BlogDetails';
import Projects from './Pages/Projects/Projects';
import ProjectsDetails from './Pages/ProjectsDetails/ProjectsDetails';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blog-details" element={<BlogDetails/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/projectsDetails" element={<ProjectsDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
