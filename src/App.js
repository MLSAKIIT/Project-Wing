import React from 'react';
import './App.css';


import AOS from "aos";
import "aos/dist/aos.css";

import Landing from './Components/Landing/Landing';
import NavBar from './Components/Navbar/Navbar';
import Project from './Components/Projects/Project';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Timeline from './Components/Timeline/Timeline';

AOS.init();


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Landing/>
      <About/>
      <Timeline/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
