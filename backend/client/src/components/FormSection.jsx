import React, { useState } from "react";
import "../styles/FormSection.css"; // Import CSS for styling
// import SubmitForm from "./SubmitForm";

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    interest: "",
    whatsapp: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <div className="meetingForm">
      <h1>Talk to the Designer</h1>
      <div className="input-data">
        <div className="inner" />
        <input type="submit" className="SubmitFormBtn" defaultValue="submit" />
      </div>
    </div>
  );
};

export default FormSection;
