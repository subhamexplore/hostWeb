import React from 'react';
import {Route,Routes} from "react-router-dom";
import Main from "./Pages/Main/Main";
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
