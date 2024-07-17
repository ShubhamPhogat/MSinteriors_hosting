import React from "react";
import "../styles/KitchenGuidHome.css"; // Import the CSS file for styling

const KitchenGuidHome = () => {
  return (
    <div className="kitchen-guide">
      <div className="content-wrapper">
        <h1>Your Go-to Modular Kitchen Guide</h1>
        <p>
          With this modular kitchen manual, explore different types of layouts,
          ergonomics and components to create a personalised cooking haven.
        </p>
        <button className="guide-button">Modular Kitchen Guide</button>
      </div>
    </div>
  );
};

export default KitchenGuidHome;
