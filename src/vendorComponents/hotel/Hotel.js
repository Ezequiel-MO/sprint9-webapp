import { HotelContainer, HotelTitle } from "./styles";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Paragraph from "../utilComponents/paragraph/Paragraph";
import { Rating } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import HotelIcons from "./hotelIcons/HotelIcons";

const Hotel = ({ hotel }) => {
  const [stars] = useState(hotel.numberStars);
  const [images, setImages] = useState([]);
  const [leftIconsText, setLeftIconsText] = useState([]);
  const [rightIconsText, setRightIconsText] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  useEffect(() => {
    const imageArr = hotel.imageContentUrl.map((hotel) => {
      return {
        src: hotel,
        width: 4,
        height: 3,
      };
    });
    setImages(imageArr);
  }, [hotel.imageContentUrl]);

  useEffect(() => {
    console.log("text content type of =>", hotel.textContent[0]);
    //convert hotel.textContent string to array
    const textContentArr = hotel.textContent[0].split("\n");
    console.log("text content array=>", textContentArr);
  }, [hotel.textContent]);

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

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <HotelContainer>
      <HotelTitle>
        <h2> {hotel.name}</h2>
        <Rating readOnly value={stars} />
      </HotelTitle>
      {/*render the hotel's textContent property*/}
      <Paragraph textContent={hotel.textContent} />
      {/*render the hotel's images property*/}
      <Gallery photos={images} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={images.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <HotelIcons
        leftIconsText={leftIconsText}
        rightIconsText={rightIconsText}
      />
    </HotelContainer>
  );
};

export default Hotel;
