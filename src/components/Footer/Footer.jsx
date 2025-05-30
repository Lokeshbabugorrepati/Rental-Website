import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className={isHomePage ? 'homePage_footer otherPage_footer': "otherPage_footer"}>
        <div className="container">
          <h4>LUXURY RENTALS</h4>
          <p>
           Discover your perfect getaway with us — elegant stays, premium service, and unforgettable experiences await. Your comfort is our priority.
          </p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/termsandconditions"}>Terms&Conditions</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect with us</h4>
          <p>+91-8978015426</p>
          <p>lokeshbabugorrepati@gmail.com</p>
          <p>© All Rights Reserved By Lokesh babu Gorrepati.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;