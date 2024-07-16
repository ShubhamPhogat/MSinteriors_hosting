import React, { useState } from "react";
import "../styles/ImageSection.css"; // Import CSS for styling

const ImageSection = ({ src, text, arrInd, items }) => {
  let arr = [{ src: src, description: text }, ...items];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + arr.length) % arr.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % arr.length);
  };

  return (
    <div
      className="image-section"
      style={{ backgroundImage: `url(${arr[currentIndex].src})` }}
    >
      <div className="image-overlay"></div>
      <img
        src={arr[currentIndex].src}
        alt={arr[currentIndex].description}
        className="main-image"
      />
      <div className="image-description">{arr[currentIndex].description}</div>
      <div className="navigation-buttons">
        <button onClick={handlePrevClick}>Previous Design</button>
        <button onClick={handleNextClick}>Next Design</button>
      </div>
    </div>
  );
};

export default ImageSection;
