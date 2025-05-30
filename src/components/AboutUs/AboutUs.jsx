import React from "react";
import About from "../../subComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>Discover the ultimate in luxury living with our handpicked selection of high-end villas. Each property is curated to provide unmatched comfort, privacy, and elegance.</p>
          <p>Whether you’re planning a romantic getaway, a family retreat, or a group vacation, our villas offer stunning views, world-class amenities, and a seamless experience from booking to check-out.</p>
          <p>Let us handle the details while you unwind in style — because luxury should feel effortless.

</p>
        </div>
      </div>
      <About />
    </section>
  );
};

export default AboutUs;