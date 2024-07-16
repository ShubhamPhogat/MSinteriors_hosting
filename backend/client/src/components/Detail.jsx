import React from "react";
import ImageSection from "./ImageSection";
import FormSection from "./FormSection";
import "../styles/Detail.css"; // Import CSS for styling
import { useLocation } from "react-router-dom";
import MoreDesigns from "./MoreDesigns";

const Detail = () => {
  const location = useLocation();
  const { src, text, arrInd, id, items } = location.state || {};
  console.log("the data we get", location.state);
  return (
    <div className="main-layout">
      <div className="empty"></div>
      <ImageSection
        src={src}
        text={text}
        arrInd={arrInd}
        id={id}
        items={items}
      />
      <FormSection />
      <MoreDesigns array={items} />
    </div>
  );
};

export default Detail;
