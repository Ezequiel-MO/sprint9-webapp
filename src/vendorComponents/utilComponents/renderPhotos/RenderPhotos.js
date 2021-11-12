import ReactBnbGallery from "react-bnb-gallery";
import { useState } from "react";
import "react-bnb-gallery/dist/style.css";
import { MainImage } from "./styles";

const RenderPhotos = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MainImage onClick={() => setIsOpen(true)}>
        <img src={images[0]} alt='first' />
        <h5>Click on the image and watch the gallery</h5>
      </MainImage>
      <ReactBnbGallery
        show={isOpen}
        photos={images}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default RenderPhotos;
