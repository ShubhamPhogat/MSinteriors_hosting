import React from "react";
import "../styles/ComparisonTable.css";

const data = [
  {
    category: "Structure",
    fullModular:
      "Modular kitchens are assembled in factories in the form of multiple units that assimilate aesthetics and functionality.",
    semiModular:
      "Semi-modular kitchens comprise existing civil work constructions along with modular units.",
    customCarpentry:
      "Civil kitchens are constructed by carpenters with elementary technology and design.",
  },
  {
    category: "Finishes",
    fullModular: "Sleek and seamless look with premium quality.",
    semiModular:
      "Finish and quality are a concern since they depend on the vendors and carpenters.",
    customCarpentry:
      "The aesthetic quality depends on the workmanship of the carpenter.",
  },
  {
    category: "Ease of Design",
    fullModular:
      "Designed by experts with the latest technology and 3D visuals, these kitchens ensure utility and are personalised per the user's style.",
    semiModular:
      "It provides a limited scope of customisation and precise detailing.",
    customCarpentry:
      "Constraints on tailor-made design and planning with 2D visuals.",
  },
  {
    category: "Installation",
    fullModular:
      "The pre-fabricated modular units can be assembled and dismantled easily.",
    semiModular: "The fixed cabinets in these kitchens cannot be disassembled.",
    customCarpentry:
      "Due to the fixed components, the assembling and dismantling are arduous.",
  },
  {
    category: "Space Optimisation",
    fullModular:
      "Standard Modular units provide designated space for customised storage solutions, enhancing ergonomics and functionality.",
    semiModular:
      "Unlike fully-modular kitchens, space utilisations could be questionable because of the existing platforms.",
    customCarpentry:
      "Constructed with no standard modules, space constraints and simple storage solutions.",
  },
  {
    category: "Warranty",
    fullModular: "10-year warranty and convenient replacements of components.",
    semiModular: "No guarantee and replacements possible.",
    customCarpentry: "No guarantee and replacements possible.",
  },
  {
    category: "Cost Value",
    fullModular:
      "Designed according to the budget with marginal cost difference.",
    semiModular: "Comparatively cheaper than full-modular kitchens.",
    customCarpentry: "The cost may vary to the original estimate.",
  },
  {
    category: "Maintenance",
    fullModular: "Detachable modular units are easy to clean and maintain.",
    semiModular:
      "Cleaning and maintenance of the existing structures is slightly tough.",
    customCarpentry:
      "The fixed cabinets and shelves make deep cleaning around the edges and corners a hassle.",
  },
  {
    category: "Time Duration",
    fullModular: "Factory-made modular units ensure...",
    semiModular: "The modular fittings take longer than...",
    customCarpentry: "The components fabricated on site make it...",
  },
];

const KitchenComparison = () => {
  return (
    <div className="comparison-table">
      <h2>Comparison Between Modular, Semi-Modular and Custom</h2>
      <div className="table-container">
        <div className="table-header">
          <div className="table-cell"></div>
          <div className="table-cell">Full Modular</div>
          <div className="table-cell">Semi Modular</div>
          <div className="table-cell">Custom Carpentry</div>
        </div>
        {data.map((row, index) => (
          <div className="table-row" key={index}>
            <div className="table-cell">{row.category}</div>
            <div className="table-cell">{row.fullModular}</div>
            <div className="table-cell">{row.semiModular}</div>
            <div className="table-cell">{row.customCarpentry}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KitchenComparison;
