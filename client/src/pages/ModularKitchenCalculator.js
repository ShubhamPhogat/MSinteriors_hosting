// src/ModularKitchenCalculator.jsx
import React, { useState } from "react";
import "../styles/ModularKitchenCalculator.css";
import { useNavigate } from "react-router-dom";
import { LshapeKitchen, parallel, StraightKitchen, UShape } from "../assesets";

const kitchenShapes = [
  {
    name: "L_Shape",
    description:
      "Efficient and flexible, L-shaped kitchens are perfect for modern homes. They offer practical working space and maximise storage while facilitating free-flow movement.",
    image: LshapeKitchen, // replace with the actual path to your image
    index: 1,
  },
  {
    name: "U_Shape",
    description:
      "U-shaped kitchens provide ergonomic and effective designs with ample counter space and streamlined cabinetry. This creates organized work zones for medium and spacious kitchens.",
    image: UShape,
    index: 2,
  },
  {
    name: "Straight",
    description:
      "Straight kitchens are a linear arrangement of countertops, cabinets, and appliances along a single wall. They save space and highlight functionality, ideal for condominiums or studio apartments.",
    image: StraightKitchen,
    index: 3,
  },
  {
    name: "Parallel",
    description:
      "Smart and practical, Parallel kitchens have two countertops facing each other that create a coherent workflow, profuse storage, and offer increased customizability.",
    image: parallel,
    index: 4,
  },
];

const ModularKitchenCalculator = () => {
  const [selectedShape, setSelectedShape] = useState(null);
  const navigate = useNavigate();

  const handleShapeSelect = (shape) => {
    setSelectedShape(shape);
  };

  const handleNextStep = () => {
    if (selectedShape) {
      const url = `./${selectedShape}`;
      navigate(url, { state: selectedShape });
    }
  };

  return (
    <div className="kitchen-shape-selector">
      <div className="header">
        <h1>Modular Kitchen Cost Calculator</h1>
        <div className="steps">
          <span className="step active">1. Select Shape</span>
          <span className="step">2. Enter Size</span>
          <span className="step">3. Contact Your Designer</span>
        </div>
      </div>
      <h2>Please Select Shape of your Kitchen</h2>
      <div className="shape-options">
        {kitchenShapes.map((shape) => (
          <div
            key={shape.index}
            className={`shape-option ${
              selectedShape === shape ? "selected" : ""
            }`}
            onClick={() => handleShapeSelect(shape)}
          >
            <img src={shape.image} alt={shape.name} />
            <h3>{shape.name.replace("_", " ")}</h3>
            <p>{shape.description}</p>
            <input
              type="radio"
              name="shape"
              checked={selectedShape === shape}
              readOnly
            />
          </div>
        ))}
      </div>
      <button
        className="next-btn"
        onClick={handleNextStep}
        disabled={!selectedShape}
      >
        Next
      </button>
    </div>
  );
};

export default ModularKitchenCalculator;
