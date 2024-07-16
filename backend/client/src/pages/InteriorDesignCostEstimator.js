import React, { useState } from "react";
import "../styles/InteriorDesignCostEstimator.css";
import { estimateSvg1, estimateSvg2 } from "../assesets";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { GiFamilyHouse } from "react-icons/gi";
import { GiSpookyHouse } from "react-icons/gi";
import { BsFillHouseDownFill } from "react-icons/bs";
import { BsFillHouseUpFill } from "react-icons/bs";
import { GiVikingLonghouse } from "react-icons/gi";
// import { icons } from "antd/es/image/PreviewGroup";
import { useNavigate } from "react-router-dom";

const InteriorDesignCostEstimator = () => {
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [selectedPurpose, setSelectedPurpose] = useState("");

  const handlePropertyTypeClick = (type) => {
    console.log("clicled");
    setSelectedPropertyType(type);
    console.log(selectedPropertyType);
  };
  let navigate = useNavigate();
  function navi() {
    navigate("./quantityCalc", {
      state: { selectedPropertyType, selectedPurpose },
    });
  }

  const handlePurposeClick = (purpose) => {
    setSelectedPurpose(purpose);
  };

  return (
    <div className="Estcontainer">
      <div className="image-left">
        <img src={estimateSvg1} alt="Left" />
      </div>
      <div className="form-container">
        <div className="interior-design-estimator">
          <h2>Interior Design Cost Estimator</h2>
          <p>STEP 1 of 5</p>
          <div className="property-type">
            <h3>Please Select Your Property Type</h3>
            <div className="property-options">
              <div className="option">
                <span>
                  {" "}
                  <BsFillHouseDoorFill />{" "}
                </span>
                <button
                  key={1}
                  className={` ${
                    selectedPropertyType === "1 BHK" ? "selectedbtn" : ""
                  }`}
                  onClick={() => handlePropertyTypeClick("1 BHK")}
                >
                  1BHK
                </button>
              </div>
              <div className="option">
                <span>
                  {" "}
                  <GiFamilyHouse />{" "}
                </span>
                <button
                  key={2}
                  className={` ${
                    selectedPropertyType === "2 BHK" ? "selectedbtn" : ""
                  }`}
                  onClick={() => handlePropertyTypeClick("2 BHK")}
                >
                  2BHK
                </button>
              </div>
              <div className="option">
                <span>
                  {" "}
                  <GiSpookyHouse />
                </span>
                <button
                  key={3}
                  className={` ${
                    selectedPropertyType === "3 BHK" ? "selectedbtn" : ""
                  }`}
                  onClick={() => handlePropertyTypeClick("3 BHK")}
                >
                  3BHK
                </button>
              </div>
              <div className="option">
                <span>
                  {" "}
                  <GiVikingLonghouse />{" "}
                </span>
                <button
                  key={4}
                  className={` ${
                    selectedPropertyType === "3+ BHK" ? "selectedbtn" : ""
                  }`}
                  onClick={() => handlePropertyTypeClick("3+ BHK")}
                >
                  3+BHK
                </button>
              </div>
            </div>
          </div>
          <div className="purpose">
            <h3>Purpose</h3>
            <div className="purpose-options">
              <div className="option">
                <BsFillHouseDownFill />
                <button
                  className={`${
                    selectedPropertyType === "Move In" ? "selectedbtn" : ""
                  }`}
                  onClick={() => handlePurposeClick("Move In")}
                >
                  Move In
                </button>
              </div>
              <div className="option">
                <BsFillHouseUpFill />
                <button
                  //   key={type.type}
                  className={`${
                    selectedPropertyType === "Rent Out" ? "selectedbtn" : ""
                  }`}
                  onClick={() => handlePurposeClick("Rent Out")}
                >
                  Rent Out
                </button>
              </div>
            </div>
          </div>
          <button onClick={navi} className="next-button">
            NEXT
          </button>
        </div>
      </div>
      <div className="image-right">
        <img src={estimateSvg2} alt="Right" />
      </div>
    </div>
  );
};

export default InteriorDesignCostEstimator;
