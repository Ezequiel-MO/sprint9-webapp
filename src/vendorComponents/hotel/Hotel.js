import { HotelContainer, HotelTitle } from "./styles";
import Gallery from "react-grid-gallery";
import Paragraph from "../utilComponents/paragraph/Paragraph";
import { Rating } from "@mui/material";
import { useState, useEffect } from "react";

const Hotel = ({ hotel }) => {
  const [stars] = useState(hotel.numberStars);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageArr = hotel.imageContentUrl.map((hotel) => {
      return {
        src: hotel,
        thumbnail: hotel,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
      };
    });
    setImages(imageArr);
  }, [hotel.imageContentUrl]);
  return (
    <HotelContainer>
      <HotelTitle>
        <h4> {hotel.name}</h4>
        <Rating readOnly value={stars} />
      </HotelTitle>
      {/*render the hotel's textContent property*/}
      <Paragraph textContent={hotel.textContent} />
      {/*render the hotel's images property*/}
      <Gallery images={images} />
    </HotelContainer>
  );
};

export default Hotel;
