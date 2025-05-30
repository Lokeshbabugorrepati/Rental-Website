import React from "react";
import { RiFacebookBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT Us</h1>
        <p>We’d love to hear from you! Whether you have questions, need help with bookings, or simply want to learn more about our luxury stays — we’re here for you.

Feel free to reach out and our team will get back to you as soon as possible.


        </p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
              <h3>Let's connect</h3>
              <div>
                <p>Phone</p>
                <span>+91-8978015426</span>
              </div>
              <div>
                <p>Email</p>
                <span>lokeshbaugorrepati@gmail.com</span>
              </div>
              <div>
                <p>Address</p>
                <span>D.No-2/41,Mantripalem,AndhraPradesh</span>
              </div>
              <ul>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
              </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;