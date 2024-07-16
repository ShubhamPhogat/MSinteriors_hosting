import React from "react";
import KitchenGuidHome from "../components/KitchenGuidHome";
import KitchenLayouts from "../components/KitchenLayouts";
import KitchenComparison from "../components/KitchenComparison";
import KitchenTypeComparison from "../components/KitchenTypeComparison";
import "../styles/kitchenGuide.css";
const KitchenGuide = () => {
  return (
    <div className="home">
      <KitchenGuidHome />
      <KitchenLayouts />
      <KitchenComparison />
      <div className="empty"></div>
      <KitchenTypeComparison />
    </div>
  );
};

export default KitchenGuide;
