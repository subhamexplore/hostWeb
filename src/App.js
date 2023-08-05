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
import Events from "./Pages/Events/Events";
import Eventudp from "./Pages/Eventudp/Eventudp";
import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer";
import Teams from "./Pages/Teams/Team";
import Alumni from "./Pages/Alumni/Alumni";
import AboutUs from './Pages/AboutUs/AboutUs';
import Login from './Pages/login/Login';
import Signup from './Pages/login/Signup';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }
  return (
    <div className="App">
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blog-details" element={<BlogDetails/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/projectsDetails" element={<ProjectsDetails/>}/>
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/eventudp" element={< Eventudp/>} />

        <Route path="/teams" element={<Teams/>} />
        <Route path="/alumni" element={<Alumni/>} />

        <Route path="/about" element={<AboutUs/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
