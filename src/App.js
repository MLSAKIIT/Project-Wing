import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Landing from './Components/Landing/Landing';
import NavBar from './Components/Navbar/Navbar';
import Project from './Components/Projects/Project';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Procedure from './Components/Procedure/Procedure';
import FAQ from './Components/FAQ/FAQ';
import Timeline from './Components/Timeline/Timeline';
import Apply from './Components/Apply/Apply';
import Domains from './Components/Domains/Domains';
import Rules from './Components/Rules/Rules';
import Perks from './Components/Perks/Perks';

AOS.init();


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>

        <div className="content">
          <Switch>

            <Route path="/apply">
              <Apply/>
            </Route>
            
            
            <Route path="/">
              <Landing/>
              <hr className="divver"/>
              <About/>
              <hr className="divver"/>
              <Timeline/>
              <hr className="divver"/>
              <Procedure />
              <hr className="divver"/>
              <Domains/>
              <hr className="divver"/>
              <Project/>
              {/* <hr className="divver"/>
              <Perks/> */}
              <hr className="divver"/>
              <Rules/>
              <hr className="divver"/>
              <FAQ />
            </Route>
            
          </Switch>
        </div>
        
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
