import { HotelContainer, HotelTitle } from "./styles";
import RenderPhotos from "../utilComponents/renderPhotos/RenderPhotos";
import Paragraph from "../utilComponents/paragraph/Paragraph";

const Hotel = ({ hotel }) => {
  return (
    <HotelContainer>
      <HotelTitle>
        <h4> {hotel.name}</h4>
        <p> {hotel.numberStars} stars</p>
      </HotelTitle>
      {/*render the hotel's textContent property*/}
      <Paragraph textContent={hotel.textContent} />
      {/*render the hotel's images property*/}
      <RenderPhotos images={hotel.imageContentUrl} />
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
