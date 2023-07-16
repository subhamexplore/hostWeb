import React from 'react';
import {Route,Routes} from "react-router-dom";
import Main from "./Pages/Main/Main";
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blogs" element={<Blogs/>} />
      </Routes>
    </div>
  );
}

export default App;
