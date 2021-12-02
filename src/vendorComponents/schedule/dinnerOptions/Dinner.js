import { Typography } from "@mui/material";
import Paragraph from "../../utilComponents/paragraph/Paragraph";
import RenderPhotos from "../../utilComponents/renderPhotos/RenderPhotos";

const Dinner = ({ dinnerOption }) => {
  return (
    <div id={dinnerOption._id}>
      <Typography variant='h5'>{dinnerOption.name}</Typography>
      <Paragraph textContent={dinnerOption.textContent} />
      <RenderPhotos images={dinnerOption.imageContentUrl} />
    </div>
  );
};

export default Dinner;
