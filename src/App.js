import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing individual pages
import { Home, Projects, Apply, AboutUs } from './pages';
import { NavBar } from './components';

function App() {
  return (     
    <Router>
      <NavBar />
      <div className="pages">
        <Routes>
          <Route path="/Codelaboration" element={<Home/>} />
          <Route path="/Codelaboration/projects" element={<Projects/>} />
          <Route path="/Codelaboration/apply" element={<Apply/>} />
          <Route path="/Codelaboration/aboutus" element={<AboutUs/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;