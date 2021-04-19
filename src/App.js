import React,{useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Aos from "aos";
import "aos/dist/aos.css";
import {BrowserRouter as Switch, Route} from "react-router-dom";
import Home from './components/Home';
import AboutPage from './Pages/AboutPage';
import ServicePage from './Pages/ServicePage';
import ProjectPage from './Pages/ProjectPage';

import {  } from "react-router-dom";

function App() {

  useEffect(() => {
    Aos.init({duration:1000});
  }, []);
  return (
    <>
    <Navbar/>
      <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/about" component={AboutPage} exact></Route>
          <Route path="/services" component={ServicePage} exact></Route>
          <Route path="/projects" component={ProjectPage} exact></Route>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
