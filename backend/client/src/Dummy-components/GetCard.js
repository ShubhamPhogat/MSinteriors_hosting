import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CardStyle.css";
import ImageGallery from "../components/ImageGallery";
import { bd1, bd2, kt1, wardrobeImg } from "../assesets";
const ImageCard = ({ type }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredArray, setFilteredArray] = useState([]);

  console.log("image card type", type.item);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:5000/api/images")
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
        console.log("data fetched", response.data);
        filterData(response.data, type);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (data) {
      filterData(data, type);
    }
  }, [type, data]);

  const filterData = (data, type) => {
    console.log("filtering on the type", type);
    if (type) {
      setFilteredArray(data.filter((item) => item.type === type.item));
    } else {
      setFilteredArray(data.filter((item) => item.type === "Bedroom"));
    }
    console.log("filtered itme", filteredArray);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  return (
    <div>
      <ImageGallery items={filteredArray} />
    </div>
  );
};

export default ImageCard;
