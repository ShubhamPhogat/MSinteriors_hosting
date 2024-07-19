import React from "react";
import "../styles/FooterBottomSection.css";
import { Logo } from "../assesets";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const FooterBottomSection = () => {
  return (
    <footer className="footer">
      <div className="top-section">
        <div className="guarantee">
          <h4>Lowest Price Guaranteed</h4>
          <p>
            No false claims. You get what you see. Lowest Price Guaranteed on
            home interiors.
          </p>
        </div>
        <div className="delivery">
          <h4>Timely Delivery Assurance</h4>
          <p>
            Promised Timeline = Actual Date of Delivery. We strictly follow the
            timelines promised to you.
          </p>
        </div>
        <div className="emi">
          <h4>Providing Services from 2002</h4>
          <p>Get in touch with our designers to know more...</p>
        </div>
      </div>
      <div className="bottom-section">
        <div className="logo">
          <img src={Logo} alt="MSinteriors" />
        </div>
        <div className="links">
          <div className="column">
            <h4>Overview</h4>
            <ul>
              <li>Interior Designer</li>
              <li>Trends</li>
            </ul>
          </div>
          <div className="column">
            <h4>Network Sites</h4>
            <ul>
              <li>Square Yards India</li>
              <li>Prop VR</li>
              <li>Prop AMC</li>
              <li>Square Yards UAE</li>
              <li>Square Yards Canada</li>
              <li>Urban Money</li>
              <li>UM Oceania</li>
            </ul>
          </div>
          <div className="column">
            <h4>Contact Us</h4>
            <ul>
              <li>Write to us at MSinteriorArts.com</li>
            </ul>
          </div>
          <div className="column">
            <h4>Address</h4>
            <address>
              LG-14 SOMDUTT CHAMBER-1, <br />
              BHIKAJI CAMA PALACE <br />
              NEW DELHI-110066
            </address>
          </div>
          <div className="column">
            <h4>Interior</h4>
            <ul>
              <li>FAQs</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="column">
            <h4>More</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
              <li>Lending Partners</li>
              <li>Refer And Earn</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="column">
            <h4>Keep in Touch</h4>
            <div className="social-media">
              <a href="#">
                <FaFacebookSquare />
              </a>
              <a href="https://www.instagram.com/ms_interior_designers?utm_source=qr&igsh=MTF2dnNhNmN3ajd4aw==">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottomSection;
