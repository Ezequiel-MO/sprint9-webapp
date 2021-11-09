import { HotelContainer, HotelTitle } from "./styles";
import ReactBnbGallery from "react-bnb-gallery";
import "react-bnb-gallery/dist/style.css";
import { useState } from "react";

const Hotel = ({ hotel }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HotelContainer>
      <HotelTitle>
        <h4> {hotel.name}</h4>
        <p> {hotel.numberStars} stars</p>
      </HotelTitle>
      {/*render the hotel's textContent property*/}
      <p>{hotel.textContent}</p>
      {/*render the hotel's images property*/}
      <button onClick={() => setIsOpen(true)}>Open gallery</button>
      <ReactBnbGallery
        show={isOpen}
        photos={hotel.imageContentUrl}
        onClose={() => setIsOpen(false)}
      />
    </HotelContainer>
  );
};

export default Hotel;

{
  /* <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant='h4' gutterBottom>
          {title}
        </Typography>
        <Rating name='read-only' value={stars} readOnly emptyIcon />
        <Typography component='subtitle1'>
          <sup>{category}</sup>
        </Typography>
      </div>
      <div className={classes.text}>
        <Paragraph variant={variant} paras={paras} />
      </div>
      <Gallery images={photos} />
      <HotelIcons
        leftIconsText={leftIconsText}
        rightIconsText={rightIconsText}
      />
    </div> */
}
