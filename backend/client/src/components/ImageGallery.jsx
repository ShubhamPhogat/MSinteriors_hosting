import React, { useEffect } from "react";
import ImageCard from "./ImageCard";
import "../styles/ImageGallery.css";
import { Logo, bd1, bd2, bd3, kt1, kt2, kt3, pj1, pj2, pj3 } from "../assesets";
const ImageGallery = ({ items }) => {
  // console.log("bedroom ->", Logo);

  //   console.log(filteredItems);
  // console.log("this is des", props.value.item);
  //   let index = 1;
  // let filteredItems = images.filter((item) => item.type === props.value.item);
  // console.log("items", items[0]);
  return (
    <div className="image-gallery">
      {items ? (
        items.map((image, index) => (
          //   console.log("randering card", image.index),
          <ImageCard
            id={image._id}
            arrInd={index}
            src={image.src}
            items={items}
            text={image.description}
          />
          // <ImageCard
          //   key={image.id}
          //   arrInd={index}
          //   src={image.src}
          //   items={items}
          //   text={image.description}
          // />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImageGallery;
