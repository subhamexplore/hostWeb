import React from 'react';
import {Route,Routes} from "react-router-dom";
import Main from "./Pages/Main/Main";
import Blogs from './Pages/Blogs/Blogs';
import AboutUs from './Pages/AboutUs/AboutUs';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/about" element={<AboutUs/>} />
      </Routes>
    </div>
  );
}

export default App;
