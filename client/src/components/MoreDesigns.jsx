import React, { useState } from "react";
import "../styles/MoreDesigns.css";
import Card from "./Card";
import ImageCard from "./ImageCard";
const MoreDesigns = ({ array }) => {
  const [color, setColor] = useState(null);
  const [finish, setFinish] = useState(null);
  const [theme, setTheme] = useState(null);
  const [fileterdArray, setFilteredArray] = useState(array);
  console.log("data in mored esign", array);
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleFinishChange = (event) => {
    setFinish(event.target.value);
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Values:", { color, finish, theme });
    setFilteredArray(() => {
      return array.filter((item) => {
        return (
          (color ? item.color === color : true) &&
          (finish ? item.finish === finish : true) &&
          (theme ? item.theme === theme : true)
        );
      });
    });
  };

  function clear() {
    setColor(null);
    setFinish(null);
    setTheme(null);
    setFilteredArray(array);
  }

  return (
    <div className="DesingContainer">
      <h1>More Related Designs For You</h1>

      <form className="filters-container" onSubmit={handleSubmit}>
        <div className="filterOptions">
          <div className="filter">
            <select
              id="color"
              name="color"
              value={color}
              onChange={handleColorChange}
            >
              <option value={null}> Color</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="black">Black</option>
              <option value="pink">pink</option>
              <option value="cream">cream</option>
            </select>
          </div>

          <div className="filter">
            <select
              id="finish"
              name="finish"
              value={finish}
              onChange={handleFinishChange}
            >
              <option value={null}> Finish</option>
              <option value="marble">Marble</option>
              <option value="wooden">Wood</option>
              <option value="glass">Glassy</option>
              <option value="matte">Matte</option>
            </select>
          </div>

          <div className="filter">
            <select
              id="theme"
              name="theme"
              value={theme}
              onChange={handleThemeChange}
            >
              <option value={null}>Theme</option>
              <option value="traditional">Traditional</option>
              <option value="contemporary">Contemporary</option>
              <option value="luxuary">Luxury</option>
              <option value="modern">Modern</option>
            </select>
          </div>

          <button className="submitBtn" type="submit">
            Apply
          </button>
          <button onClick={clear} className="submitBtn" type="submit">
            clear All
          </button>
        </div>
      </form>

      <div className="relatedOptions">
        {fileterdArray.map((item, index) => (
          <ImageCard
            id={item.id}
            arrInd={index}
            src={item.src}
            text={item.description}
            items={array}
          />
        ))}
      </div>
    </div>
  );
};

export default MoreDesigns;
