import React from "react";
import "../styles/homepage.css";
import Form from "../components/Form";
import ContactForm from "../components/ContactForm";
import Body from "./Body";
import { useNavigate } from "react-router-dom";
const Home = ({ selectedScroll }) => {
  const navigate = useNavigate();
  function hide() {
    // let ele = document.getElementById("form");
    // ele.classList.toggle("hide");
    let setSizeA = "";
    let setSizeB = "";
    let setSizeC = "";

    navigate("/submitForm", { state: { setSizeA, setSizeB, setSizeC } });
  }
  return (
    <div>
      <div className="main">
        <div className="form ">
          <h1>interior desing that speaks of you</h1>
          <h3>
            from foundation to furnishing we desing your home like our own
            Providing Services from 2002
          </h3>
          <button onClick={hide} className="btn">
            Book free consultation
          </button>
        </div>
        <Form />
      </div>
      <Body selectedScroll={selectedScroll} />
    </div>
  );
};

export default Home;
