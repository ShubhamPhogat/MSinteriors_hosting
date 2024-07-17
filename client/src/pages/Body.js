import React, { useEffect, useState } from "react";

// import {
//   balcony,
//   bedroom,
//   falseCieling,
//   kidsRoom,
//   kitchen,
//   livingRoom,
//   ss1,
//   tvUnit,
//   wardrobe,
// } from "../assesets";

import "../styles/body.css";
import Card from "../components/Card";
import HorizontalScrollMenu from "../components/HorizontalScrollMenu";
// import ImageGallery from "../components/ImageGallery.jsx";
import GetCard from "../Dummy-components/GetCard.js";
import {
  balcony_img,
  bd1,
  bd2,
  ciel,
  kidsRoom,
  kt1,
  pj1,
  ss1,
  tv1,
  wardrobeImg,
} from "../assesets/index.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ImageCard from "../Dummy-components/GetCard.js";

const Body = ({ selectedScroll }) => {
  const [data, setData] = useState(null);
  // const [filteredArray, setFilteredArray] = useState({});

  useEffect(() => {
    axios
      .get("https://msinteriors-backend.onrender.com/api/images")
      .then((response) => {
        setData(response.data);

        console.log("data fetched in body", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const [Design, setDesign] = useState(null);
  const [filteredArray, setfilteredArray] = useState(data);

  // navigate ***************

  let navigate = useNavigate();

  useEffect(() => {
    if (filteredArray) {
      const src = filteredArray[0].src;
      const text = filteredArray[0].description;
      const id = filteredArray[0].id;
      const arrInd = 0;
      const url = `/imgView/${id}`;
      let items = filteredArray;
      console.log("data to send via card", items);
      navigate(url, { state: { src, text, id, items, arrInd } });
    }
  }, [filteredArray]);

  function handleClick(type) {
    const newArray = data.filter((item) => item.type === type);
    setfilteredArray(newArray);
  }

  return (
    <div>
      <div className="img">
        <img src={ss1} />
      </div>
      <div className="features">
        <h1>Interior Design Services Under One Roof</h1>
        <h3>
          From ideation to execution, we offer functional design solutions for
          your home.
        </h3>
        <div className="itemList">
          <div onClick={() => handleClick("Bedroom")} className="cards">
            <Card data={bd2} text="bedroom" />
          </div>
          <div onClick={() => handleClick("Kids-Room")} className="cards">
            <Card data={kidsRoom} text="Kids-Room" />
          </div>
          <div onClick={() => handleClick("Kitchen")} className="cards">
            <Card data={kt1} text="Kitchen" />
          </div>
          {/* <div onClick={() => handleClick("Living Room")} className="cards">
            <Card data={lr1} text="Living-Room" />
          </div> */}
          <div onClick={() => handleClick("Balcony")} className="cards">
            <Card data={balcony_img} text="Baclony" />
          </div>
          <div onClick={() => handleClick("False Cieling")} className="cards">
            <Card data={ciel} text="False-cieling" />
          </div>
          <div onClick={() => handleClick("Tv Unit")} className="cards">
            <Card data={tv1} text="Tv-Unit" />
          </div>
          <div onClick={() => handleClick("Pooja Ghar")} className="cards">
            <Card data={pj1} text="Pooja Ghar" />
          </div>
          <div onClick={() => handleClick("Wardrobe")} className="cards">
            <Card data={wardrobeImg} text="Wardrobe" />
          </div>
        </div>
      </div>
      <div className="scrollBar">
        <h1>Design Ideas for Every Space</h1>
        <h3>Because every corner holds a unique design potential.</h3>
        <HorizontalScrollMenu
          func={setDesign}
          selectedScroll={selectedScroll}
          funcVal={Design}
        />
      </div>
      <div>
        {/* {console.log("this is des", Design)} */}
        <ImageCard type={Design || "Bedroom"} />
      </div>
    </div>
  );
};

export default Body;
