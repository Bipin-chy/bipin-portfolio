import React from 'react';

import UX from "../Images/uxDesign.png";
import mern from "../Images/shuttle.png";
import web from "../Images/www.png";


const servicesIcon = [
    {
        img: UX,
        title: "UI/UX Design",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloribus ab praesentium possimus sequi dicta. Provident rem culpa"
    },
    {
        img: web,
        title: "Web Design",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloribus ab praesentium possimus sequi dicta. Provident rem culpa"
    },
    {
        img: mern,
        title: "MERN Developer",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloribus ab praesentium possimus sequi dicta. Provident rem culpa"
    }
]

const Services = () => {

    

    return (
        <div  className="section Services" id="service">
                <div className="container">
                    <h1 data-aos="fade-up">Services</h1>
                    <div className="row">

                        {servicesIcon.map(service=>(
                            <div data-aos="fade-up"
                             className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <div className="card" style={{width:"18rem"}}>
                                    <img src={service.img} className="card-img-top" style={{width:"4rem"}} alt={service.title}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{service.title}</h5>
                                        <p className="card-text">{service.text}</p>
                                    </div>
                                </div>
                            </div>

                        ))}
                        
                    </div>
                </div>
        </div>
    )
}

export default Services
