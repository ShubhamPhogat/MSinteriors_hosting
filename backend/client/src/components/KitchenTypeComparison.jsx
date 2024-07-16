import React from "react";
import "../styles/TypeComparison.css";

const data = [
  {
    category: "STORAGE",
    lShape:
      "L-shaped kitchen layouts planned across two walls are efficient and flexible at maximising storage opportunities.",
    uShape:
      "U-shaped kitchen layout is designed across three walls and offers ample storage space for cooking appliances.",
    parallel:
      "A parallel kitchen provides two workstations and doubles the storage for all your condiments and cutlery.",
  },
  {
    category: "COST",
    lShape:
      "The cost of the modular kitchen may vary depending on the size and layout, materials, appliances, and finishes.",
    uShape:
      "The cost of the modular kitchen may vary depending on the size and layout, materials, appliances, and finishes.",
    parallel:
      "The cost of the modular kitchen may vary depending on the size and layout, materials, appliances, and finishes.",
  },
  {
    category: "ERGONOMICS",
    lShape:
      "It fits well with the ergonomics of a work triangle – i.e., space between the stove, sink, and fridge.",
    uShape:
      "It adheres to the work triangle – sink, refrigerator, and cooktop with ease and flexibility.",
    parallel:
      "The ergonomic work triangle is spaced in between the two parallel walls.",
  },
  {
    category: "DRAWBACKS",
    lShape:
      "This kitchen layout has restricted wall space, not suitable for large families.",
    uShape:
      "With three connected walls, this type of kitchen can feel cramped with traffic.",
    parallel:
      "This type of kitchen layout has space constraints and can feel dark and congested.",
  },
  {
    category: "EFFICIENCY",
    lShape:
      "This budget-friendly kitchen layout design offers great flexibility and exceptional utilisation of space.",
    uShape:
      "The best modular kitchen layout for large families with affluent counter space and easy accessibility.",
    parallel:
      "This timeless kitchen layout allows personal customisations and ample storage space.",
  },
];

const KitchenTypeComparison = () => {
  return (
    <div className="comparison-table">
      <h2>Comparison Between L-shape, U-shape, and Parallel</h2>
      <p>
        Explore types of kitchen layout depending on the size, spatial planning,
        storage needs, ergonomics and budget.
      </p>
      <div className="table-container">
        <div className="table-header">
          <div className="table-cell"></div>
          <div className="table-cell">L-SHAPE KITCHEN</div>
          <div className="table-cell">U-SHAPE KITCHEN</div>
          <div className="table-cell">PARALLEL KITCHEN</div>
        </div>
        {data.map((row, index) => (
          <div className="table-row" key={index}>
            <div className="table-cell">{row.category}</div>
            <div className="table-cell">{row.lShape}</div>
            <div className="table-cell">{row.uShape}</div>
            <div className="table-cell">{row.parallel}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KitchenTypeComparison;
