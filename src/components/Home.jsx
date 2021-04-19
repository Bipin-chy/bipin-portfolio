import React from "react";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Projects from "./Projects";
import Services from "./Services";
import Particles from "react-particles-js";

const Home = () => {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 9,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <Header />
      <Services data-aos="fade-up" />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
