import React, { useEffect, useState } from "react";
import "../styles/KitchenInfo.css";
import { useLocation } from "react-router-dom";

const KitchenInfo = () => {
  const [detail, setDetail] = useState([]);
  const [vastu, setVastu] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    // Retrieve data from local storage
    const storedDetail = localStorage.getItem("detail");
    const storedVastu = localStorage.getItem("vastu");
    const storedTitle = localStorage.getItem("title");

    if (storedDetail) setDetail(JSON.parse(storedDetail));
    if (storedVastu) setVastu(JSON.parse(storedVastu));
    if (storedTitle) setTitle(storedTitle);
  }, []);
  // console.log("type", typeof detail, detail);
  return (
    <div className="advice-container">
      .<div className="empty">.</div>
      <div className="hordings">
        <h1>{title} Kitchen Planning Advice</h1>
        <p>
          Choosing the right layout is key to making your kitchen more efficient
          and flexible, without compromising on space.
        </p>
      </div>
      <div className="advice-grid">
        {detail.map((advice, index) => (
          <div className="advice-card" key={index}>
            <img src={advice.icon} alt={`${advice.title} icon`} />
            <h3>{advice.title}</h3>
            <p>{advice.description}</p>
          </div>
        ))}
      </div>
      <div className="hordings">
        <h1>Vastu Tips for Island Kitchen</h1>
        <p>
          To ensure your island kitchen is enveloped with positivity, it should
          be designed as per the principles of Vastu Shastra.{" "}
        </p>
        <div className="advice-grid">
          {vastu.map((vastu, index) => (
            <div className="advice-card" key={index}>
              <h3>{vastu.direction}</h3>
              <p>{vastu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KitchenInfo;
