import React from "react";
import KitchenCard from "./KitchenCard";
import "../styles/KitchenLayouts.css";

import {
  KitchenTypeAdviceIslanKitchen,
  KitchenTypeAdviceLshape,
  KitchenTypeAdviceParallel,
  KitchenTypeAdviceStraight,
  KitchenTypeAdviceUshape,
} from "../Data/KitchenTypeAdvice";
import KitchenTypeAdvicePeninsula from "../Data/KitchenTypeAdvice";

import vastuTipsForKitchen from "../Data/KitchenShastr";
import {
  Island,
  Lshape,
  Parallel,
  Peninsula,
  Straight,
  UShape,
} from "../assesets";

const kitchenLayouts = [
  {
    image: Straight,
    title: "Straight Kitchen",
    detail: KitchenTypeAdviceStraight,
    description:
      "This kitchen layout is designed entirely along a single wall, and is an ideal option for studio apartments, condominiums or compact homes.",
  },
  {
    image: Lshape,
    title: "L-Shape Kitchen",
    detail: KitchenTypeAdviceLshape,
    description:
      "This classic, two-sided kitchen design layout is one of the most versatile and flexible configurations suiting every style and size of the room.",
  },
  {
    image: Parallel,
    title: "Parallel Kitchen",
    detail: KitchenTypeAdviceParallel,
    description:
      "This type of kitchen layout has linear simplicity and a timeless appeal. It offers storage and counter space against two walls for an efficient workflow.",
  },
  {
    image: UShape,
    title: "U-Shape Kitchen",
    detail: KitchenTypeAdviceUshape,
    description:
      "This modular kitchen layout has three-sided wall designs that maximise storage possibilities and are efficient for medium-sized and spacious kitchens.",
  },
  {
    image: Island,
    title: "Island Kitchen",
    detail: KitchenTypeAdviceIslanKitchen,
    description:
      "This modular kitchen design layout is extremely convenient, providing additional worktops and seating, while creating an aesthetically pleasing...",
  },
  {
    image: Peninsula,
    title: "Peninsula Kitchen",
    detail: KitchenTypeAdvicePeninsula,
    description:
      "This kitchen layout has three accessible sides with one end attached to a wall, and serves as an alternative option to an island for smaller-sized kitchens.",
  },
];

const KitchenLayouts = () => {
  return (
    <div className="kitchen-layouts">
      <h2>Types of Kitchen Layouts</h2>
      <p>
        Modular kitchen configurations that seamlessly blend practical needs
        with personal taste.
      </p>
      <div className="kitchen-cards">
        {kitchenLayouts.map((layout, index) => (
          <KitchenCard
            key={index}
            image={layout.image}
            title={layout.title}
            description={layout.description}
            detail={layout.detail}
            vastu={vastuTipsForKitchen}
          />
        ))}
      </div>
    </div>
  );
};

export default KitchenLayouts;
