import React from 'react';
import {Route,Routes} from "react-router-dom";
import Main from "./Pages/Main/Main";
import Blogs from './Pages/Blogs/Blogs';
import BlogDetails from './Pages/BlogDetails/BlogDetails';
import Projects from './Pages/Projects/Projects';
import ProjectsDetails from './Pages/ProjectsDetails/ProjectsDetails';
import Achievements from "./Pages/Achievements/Achievement";
import Faq from "./Pages/Faq/Faq";
import Domains from "./Pages/Domains/Domain";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blog-details" element={<BlogDetails/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/projectsDetails" element={<ProjectsDetails/>}/>
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/domains" element={<Domains />} />
      </Routes>
    </div>
  );
}

export default App;
