import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


import project1 from "../Images/project1.jpeg";


const projects = [
    {
        img: project1,
        title: "UI/UX Design",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloribus ab praesentium possimus sequi dicta. Provident rem culpa"
    },
    {
        img: project1,
        title: "Web Design",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloribus ab praesentium possimus sequi dicta. Provident rem culpa"
    },
    {
        img: project1,
        title: "MERN Developer",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloribus ab praesentium possimus sequi dicta. Provident rem culpa"
    }
]



const Projects = () => {
    
  return (
    <div className="my-project section">
      <div className="container">
          <h1>My projects</h1>
        <div className="row">
          <OwlCarousel className="owl-theme" items={3} autoPlay loop margin={10} nav>
          {projects.map(service=>(
                            
                                <div className="card" style={{width:"18rem"}}>
                                    <img src={service.img} className="card-img-top"  alt={service.title}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{service.title}</h5>
                                        <p className="card-text">{service.text}</p>
                                    </div>
                                </div>
                          

                        ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Projects;
