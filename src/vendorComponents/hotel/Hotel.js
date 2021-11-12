import { HotelContainer, HotelTitle } from "./styles";
import RenderPhotos from "../utilComponents/renderPhotos/RenderPhotos";
import Paragraph from "../utilComponents/paragraph/Paragraph";
import { Rating } from "@mui/material";
import { useState } from "react";

const Hotel = ({ hotel }) => {
  const [stars] = useState(hotel.numberStars);

  return (
    <HotelContainer>
      <HotelTitle>
        <h4> {hotel.name}</h4>
        <Rating readOnly value={stars} />
      </HotelTitle>
      {/*render the hotel's textContent property*/}
      <Paragraph textContent={hotel.textContent} />
      {/*render the hotel's images property*/}
      <RenderPhotos images={hotel.imageContentUrl} />
    </HotelContainer>
  );
};

export default Hotel;
