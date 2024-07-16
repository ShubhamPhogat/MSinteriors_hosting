import React, { useEffect, useRef } from "react";
// import Form from "./Form";
import "../styles/SubmitForm.css";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

const SubmitForm = () => {
  // useEffect(() => {
  //   const ele = document.getElementById("form");
  //   ele.classList.toggle("hide");
  // }, []);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const messageRef = useRef();
  const location = useLocation();
  let {
    sizeA,
    sizeB,
    sizeC,
    shape,
    modularKitchen,
    wardrobe,
    entertainmentUnit,
    looseFurniture,
    falseCeiling,
    painting,
    selectedPropertyType,
    selectedPurpose,
  } = location.state || {};
  console.log(sizeA, "this is size");
  let aSize = null,
    bSize = null,
    cSize = null;
  let KitchenShape = null,
    modular_kitchen = null,
    wardrobe_count = null,
    entertainmentUnit_count = null,
    looseFurniture_count = null,
    falseCeiling_count = null,
    painting_count = null,
    selectedPropertyType_count = null,
    selectedPurpose_count = null;
  if (sizeA) aSize = sizeA;
  if (sizeB) bSize = sizeB;
  if (sizeC) cSize = sizeC;
  if (shape) KitchenShape = shape;
  if (modularKitchen) modular_kitchen = modularKitchen;
  if (wardrobe) wardrobe_count = wardrobe;
  if (looseFurniture) looseFurniture_count = looseFurniture;
  if (falseCeiling) falseCeiling_count = falseCeiling;
  if (painting) painting_count = painting;
  if (selectedPropertyType) selectedPropertyType_count = selectedPropertyType;
  if (selectedPurpose) selectedPurpose_count = selectedPurpose;
  if (entertainmentUnit) entertainmentUnit_count = entertainmentUnit;
  if (KitchenShape) KitchenShape = shape;

  let form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    console.log("current ", form.current);

    emailjs
      .sendForm("service_zqvkrzk", "template_g9t5osi", form.current, {
        publicKey: "uf_U4tAw5p65GZVhQ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="Submitform-container">
      <h2 className="Submith2">Contact us Form</h2>
      <form onSubmit={sendEmail} ref={form} className="Submitcontact-form">
        <div className="Submitform-group">
          <input
            className="Submitinput"
            type="text"
            placeholder="First Name"
            name="firstName"
            ref={firstNameRef}
          />
        </div>
        <div className="Submitform-group">
          <input
            className="Submitinput"
            type="text"
            placeholder="Last Name"
            ref={lastNameRef}
            name="lastName"
          />
        </div>
        <div className="Submitform-group">
          <input
            className="Submitinput"
            placeholder="Email Id"
            ref={emailRef}
            type="email"
            name="email"
          />
        </div>
        <div className="Submitform-group">
          <input
            className="Submitinput"
            placeholder="Mobile No."
            ref={mobileRef}
            type="tel"
            name="mobile"
          />
        </div>
        <div className="Submitform-group">
          <textarea
            className="Submittextarea"
            placeholder="write your message"
            ref={messageRef}
            name="message"
          ></textarea>
        </div>
        <button className="Submitbutton" type="submit">
          SUBMIT
        </button>
        <div className="vanish">
          <input
            className="vanishEle"
            type="text"
            value={painting_count}
            name="painting_count"
          />
          <input
            className="vanishEle"
            type="text"
            value={wardrobe_count}
            name="wardrobe_count"
          />
          <input
            className="vanishEle"
            type="text"
            value={looseFurniture_count}
            name="looseFurniture_count"
          />
          <input
            className="vanishEle"
            type="text"
            value={entertainmentUnit_count}
            name="entertainmentUnit_count"
          />
          <input
            className="vanishEle"
            type="text"
            value={modular_kitchen}
            name="modular_kitchen"
          />
          <input
            className="vanishEle"
            type="text"
            value={selectedPropertyType_count}
            name="selectedPropertyType_count"
          />
          <input
            className="vanishEle"
            type="text"
            value={selectedPurpose_count}
            name="selectedPurpose_count"
          />
          <input
            className="vanishEle"
            type="text"
            value={selectedPropertyType_count}
            name="selectedPropertyType_count"
          />
          <input
            className="vanishEle"
            type="text"
            value={aSize && aSize.feet}
            name="selectedPropertyType_count"
          />
          <input
            className="vanishEle"
            type="text"
            value={aSize && aSize.inches}
            name="aSize.inches"
          />
          <input
            className="vanishEle"
            type="text"
            value={bSize && bSize.feet}
            name="bSize.feet"
          />
          <input
            className="vanishEle"
            type="text"
            value={bSize && bSize.inches}
            name="bSize.inches"
          />
          <input
            className="vanishEle"
            type="text"
            value={cSize && cSize.feet}
            name="cSize.feet"
          />
          <input
            className="vanishEle"
            type="text"
            value={cSize && cSize.inches}
            name="cSize.inches"
          />
          <input
            className="vanishEle"
            type="text"
            value="sumit"
            name="to_name"
          />
        </div>
      </form>
    </div>
  );
};

export default SubmitForm;
