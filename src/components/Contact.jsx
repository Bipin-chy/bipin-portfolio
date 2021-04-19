import React from "react";

const Contact = () => {
  return (
    <div className="contact section">
      <div className="container">
        <h1 data-aos="fade-up">Contact me</h1>
        <p data-aos="fade-up">
          Please fill out the form and describe your project you need and I'll
          contact you as soon as possible
        </p>
        <div className="row">
          <div data-aos="fade-up" className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="form-input">
              <div className="input">
                <input
                  type="text"
                  name="name"
                  id="username"
                  placeholder="Name"
                />
              </div>

              <div className="input">
                <input
                  type="integer"
                  name="telephone"
                  id="telephone"
                  placeholder="Phone Number"
                  maxLength="10"
                />
              </div>
              <div className="input">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>

              <div className="input">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="input-group">
              
              <textarea
                class="form-control"
                aria-label="With textarea" placeholder="Describe your interest......." rows="9"
              ></textarea>
            </div>
          </div>
        </div>
        <button data-aos="fade-up" className="btn btn-primary btn-lg my-3">Contact me</button>
      </div>
    </div>
  );
};

export default Contact;
