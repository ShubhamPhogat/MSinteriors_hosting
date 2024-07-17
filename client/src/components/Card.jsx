import React from "react";
import "../styles/card.css";
const Card = (props) => {
  // console.log("this is type", props);

  return (
    <div className="cardBody">
      <div className="Cardimg">
        <img src={props.data} />
      </div>
      <div className="title">
        <h3>{props.text}</h3>
      </div>
    </div>
  );
};

export default Card;
