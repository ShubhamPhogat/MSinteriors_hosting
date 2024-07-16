import React from "react";
import "../styles/ImageCard.css";
import { useNavigate } from "react-router-dom";

const ImageCard = ({ src, text, id, items, arrInd }) => {
  const navigate = useNavigate();
  function renderForm() {
    const url = `/imgView/${id}`;
    // console.log(id, "id");
    console.log("the data to sned", src, text, id, items, arrInd);
    navigate(url, { state: { src, text, id, items, arrInd } });
  }
  return (
    <div onClick={() => renderForm()} className="image-card">
      <img src={src} alt={text} id={id} className="image-card-img" />
      <div className="image-card-overlay">
        <div className="image-card-text">{text}</div>
      </div>
    </div>
  );
};

export default ImageCard;
