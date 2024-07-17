import React from "react";
import "../styles/contactForm.css";
import { Logo } from "../assesets";

const ContactForm = () => {
  return (
    <div className="formWrapper">
      <div className="contactform">
        <form>
          <img src={Logo} />
          <div className="namefield">
            <input type="text" name="name" id="name" />
          </div>
          <div className="emailfield">
            <input type="email" name="email" id="email" />
          </div>
          <div className="mobileNo">
            <input type="number" name="number" id="number" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
