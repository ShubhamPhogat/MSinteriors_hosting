import React, { useRef } from "react";
import "../styles/HorizontalScrollMenu.css";
import { useEffect } from "react";

const HorizontalScrollMenu = (props) => {
  const categories = [
    "Living Room",
    "Kitchen",
    "Wardrobe",
    "Bedroom",
    "Kids-Room",
    "Kitchen Wall Tiles",
    "Kitchen False Ceiling",
    "Balcony",
    "Pooja Ghar",
    "Roof",
    "Bathroom",
    "Dining Room",
    "Tv Unit",
  ];
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  useEffect(() => {
    const data = localStorage.getItem("selectedItem");
    if (data) {
      // console.log("Retrieved data:", JSON.parse(data));
      props.func(data);
    } else {
      console.log("no data");
    }
  }, [props.selectedScroll]);

  function handleClick(item) {
    // console.log("clicked", item);
    props.func({ item });
  }
  return (
    <div id="scrollBar" className="scroll-container">
      <button className="scroll-button" onClick={() => scroll(-150)}>
        &lt;
      </button>
      <div className="scroll-menu" ref={scrollRef}>
        {categories.map((item, index) => (
          <div
            onClick={() => handleClick(item)}
            className="scroll-item"
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
      <button className="scroll-button" onClick={() => scroll(150)}>
        &gt;
      </button>
    </div>
  );
};

export default HorizontalScrollMenu;
