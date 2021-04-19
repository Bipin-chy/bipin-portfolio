import React from "react";
import webDeveloper from "../Images/webDeveloper.svg";

const About = () => {
  return (
    <div className="About-me section" id="about">
      <div className="container">
        <div className="row">

        <div data-aos="fade-up" className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <img src={webDeveloper} alt="web developer" style={{width:"80%"}}/>
          </div>

          <div data-aos="fade-up" className="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{marginTop:"2rem"}}>
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              doloribus ab praesentium possimus sequi dicta. Provident rem culpa
              repudiandae omnis molestiae alias sunt voluptate ut, perferendis
              tenetur nesciunt doloribus quibusdam quod nisi unde maiores ullam
              quaerat ratione voluptas, inventore tempora accusantium laboriosam
              ab id? Odit sed exercitationem, minima explicabo eum earum, dicta
              vero saepe excepturi hic cum suscipit ratione molestiae tempora
              similique? Esse obcaecati reprehenderit illo dicta quas dolor
              culpa aspernatur ut voluptate hic fugiat, tempore consequuntur, et
              facere odit omnis minus earum. Nesciunt culpa repellendus
              asperiores, ducimus hic quia voluptatem consequuntur magnam dicta
              reprehenderit exercitationem fuga accusantium explicabo. At.
            </p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default About;
