import React from "react";
import "../styles/form.css";
import { Logo } from "../assesets";
import { GiCrossMark } from "react-icons/gi";

const Form = () => {
  function hide() {
    let ele = document.getElementById("form");
    ele.classList.toggle("hide");
  }

  return (
    <div id="form" className="hide">
      <div className="logo">
        <img className="img" src={Logo}></img>
      </div>
      <div className="form-item">
        <p className="formLabel">Name</p>
        <input
          type="text"
          name="name"
          id="name"
          className="form-style"
          autoComplete="off"
        />
      </div>
      <div className="form-item">
        <p className="formLabel">Email</p>
        <input
          type="email"
          name="email"
          id="email"
          className="form-style"
          autoComplete="off"
        />
      </div>
      <div className="form-item">
        <p className="formLabel">Mobile no.</p>
        <input type="tel" name="tel" id="tel" className="form-style" />
        {/* <div class="pw-view"><i class="fa fa-eye"></i></div> */}
      </div>
      <div className="form-item">
        <input
          type="submit"
          className="login pull-right"
          defaultValue="Log In"
        />
        <div className="clear-fix" />
      </div>
      <div onClick={hide} className="cross">
        <GiCrossMark />
      </div>
      <p className="termsConditions">
        by submitting this form your are agree to <span>privacy policy</span>{" "}
        and <span>terms of use</span>
      </p>
    </div>
  );
};

export default Form;
