import { Typography } from "@mui/material";
import Paragraph from "../../utilComponents/paragraph/Paragraph";
import RenderPhotos from "../../utilComponents/renderPhotos/RenderPhotos";

const Lunch = ({ lunchOption }) => {
  return (
    <div id={lunchOption._id}>
      <Typography variant='h5'>{lunchOption.name}</Typography>
      <Paragraph textContent={lunchOption.textContent} />
      <RenderPhotos images={lunchOption.imageContentUrl} />
    </div>
  );
};

export default Lunch;
