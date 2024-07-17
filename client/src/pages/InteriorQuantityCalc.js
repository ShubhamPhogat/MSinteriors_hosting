import React, { useState } from "react";
import "../styles/quantityCalc.css";
import { estimateSvg1 } from "../assesets";
import { useLocation, useNavigate } from "react-router-dom";

const InteriorQuantityCalc = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let { selectedPropertyType, selectedPurpose } = location.state || {};
  const [quantities, setQuantities] = useState({
    modularKitchen: 0,
    wardrobe: 0,
    entertainmentUnit: 0,
    looseFurniture: 0,
    falseCeiling: 0,
    painting: 0,
  });

  function navi() {
    navigate("./SubmitForm", {
      state: { ...quantities, selectedPropertyType, selectedPurpose },
    });
  }

  const handleIncrement = (item) => {
    setQuantities({ ...quantities, [item]: quantities[item] + 1 });
  };

  const handleDecrement = (item) => {
    setQuantities({
      ...quantities,
      [item]: quantities[item] > 0 ? quantities[item] - 1 : 0,
    });
  };
  return (
    <div className="Estcontainer">
      <div className="image-left">
        <img src={estimateSvg1} alt="Left" />
      </div>
      <div className="form-container">
        <div className="calculator-container">
          <h2>Interior Design Cost Estimator</h2>
          <p>STEP 2 of 5</p>
          <div className="scope-of-work">
            <h3>Scope of Work</h3>
            {Object.keys(quantities).map((item, index) => (
              <div className="work-item" key={index}>
                <span>
                  {item
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </span>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span>{quantities[item]}</span>
                  <button onClick={() => handleIncrement(item)}>+</button>
                </div>
              </div>
            ))}
          </div>
          <div className="Buttons">
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="backButton"
            >
              BACK
            </button>
            <button onClick={navi} className="nextButton">
              NEXT
            </button>
          </div>
        </div>
      </div>
      <div className="image-right">
        <img src={estimateSvg1} alt="Right" />
      </div>
    </div>
  );
};

export default InteriorQuantityCalc;
