import React from "react";

import "./Contact.css";





const Contact = () => {
  return (
    <>
    {/* main */}
      <div className="container" >
        <div className="row" id="hero-sec">
          <div className="col-6" id="left-group">
            <h1 className="let">Let’s Talk</h1>
            <p className="we-welcome">
              We welcome the opportunity to connect with you Our dedicated team
              of digital marketing experts is ready to assist your business in
              achieving its goals. Please don't hesitate to reach out to us with
              any inquiries or to discuss how our services can be tailored to
              your specific needs. Let's start a conversation and explore the
              possibilities of enhancing your digital presence and maximizing
              your success.
            </p>

            <h1 className="email-link">Email</h1>
            <a href="https://www.signalhire.com/companies/ibizo-technologies/email-format">
              contact@ibizo.in
            </a>
            <h1 className="email-link">Social</h1>
            <a href="https://www.instagram.com/p/CkEUFGFhPvS/?utm_source=ig_web_copy_link">
              Instagram
            </a>
            <br />
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fbangari_priya">
              twitter
            </a>
            <br />
            <a href="https://www.facebook.com/confirmemail.php?next=https%3A%2F%2Fwww.facebook.com%2FiBixoTech%2F">
              Facebook
            </a>
          </div>
          {/* Form */}
          <div
            className="col-6 col-md-">
            <form className="form-data">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  name="fname"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="massage"
                  name="massage"
                  rows="3"
                  placeholder="Write somthing..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* address */}
      <div className="container mt-12">
        <div className="row">
          <div className="col-6" id="map">
            <div className="group">
              <h1 className="map">Visit in our office</h1>
              <p>India</p>
              <h2>GF, A-16, Sector 63, Noida, Uttar Pradesh, 201301</h2>

              <p>UK</p>
              <h2>20-22 WENLOCK ROAD LONDON N1 7GU ENGLAND</h2>
            </div>
          </div>
          <div className="col-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14008.229549517951!2d77.3808898!3d28.6280421!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef9aba1137cb%3A0xc6d306ecf457beef!2sIbizo%20Technologies!5e0!3m2!1sen!2sin!4v1697879535715!5m2!1sen!2sin"
              width="100%"
              height="400px"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
