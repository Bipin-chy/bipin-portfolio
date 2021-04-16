import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from "react-particles-js";
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Particles
    params={
      {
          particles:{
            number:{
              value:30,
              density:{
                enable:true,
                value_area:900
              }
            },
            shape:{
                type:"circle",
              stroke:{
                width:9,
                color:"#f9ab00"
              }            
            }
          }
      }
    }
    />
      <Navbar/>
      <Header/>
      <Services/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
