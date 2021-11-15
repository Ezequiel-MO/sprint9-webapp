import { HotelContainer, HotelTitle } from "./styles";
import Gallery from "react-grid-gallery";
import Paragraph from "../utilComponents/paragraph/Paragraph";
import { Rating } from "@mui/material";
import { useState, useEffect } from "react";
import HotelIcons from "./hotelIcons/HotelIcons";

const Hotel = ({ hotel }) => {
  const [stars] = useState(hotel.numberStars);
  const [images, setImages] = useState([]);
  const [leftIconsText, setLeftIconsText] = useState([]);
  const [rightIconsText, setRightIconsText] = useState([]);

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

  useEffect(() => {
    //iterate through the hotel object and construct a new object named leftIconsTextObj with the following keys : direction, restaurants, numberRooms, wifiSpeed
    const leftIconsTextObj = {
      direction: hotel.direction,
      restaurants: hotel.restaurants,
      numberRooms: hotel.numberRooms,
      wifiSpeed: hotel.wifiSpeed,
    };
    //iterate through the hotel object and construct a new object named rightIconsTextObj with the following keys : swimmingPool, checkin_out, meetingRooms, city
    const rightIconsTextObj = {
      swimmingPool: hotel.swimmingPool,
      checkin_out: hotel.checkin_out,
      meetingRooms: hotel.meetingRooms,
      city: hotel.city,
    };
    //iterate through the leftIconstTextObj and construct a new array named leftIconsTextArr with the following values : direction, restaurants, numberRooms, wifiSpeed
    const leftIconsTextArr = Object.values(leftIconsTextObj);
    //update the state with the new array
    setLeftIconsText(leftIconsTextArr);
    //iterate through the rightIconsTextObj and construct a new array named rightIconsTextArr with the following values : swimmingPool, checkin_out, meetingRooms, city
    const rightIconsTextArr = Object.values(rightIconsTextObj);
    //update the state with the new array
    setRightIconsText(rightIconsTextArr);
  }, [hotel]);

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
      <HotelIcons
        leftIconsText={leftIconsText}
        rightIconsText={rightIconsText}
      />
    </HotelContainer>
  );
};

export default Hotel;
