import { Typography } from "@mui/material";
import Paragraph from "../../utilComponents/paragraph/Paragraph";
import RenderPhotos from "../../utilComponents/renderPhotos/RenderPhotos";

const Event = ({ event }) => {
  return (
    <div id={event._id}>
      <Typography variant='h5'>{event.title}</Typography>
      <Paragraph textContent={event.textContent} />
      <RenderPhotos images={event.imageContentUrl} />
    </div>
  );
};

export default Event;
