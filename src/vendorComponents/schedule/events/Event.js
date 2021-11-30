import Paragraph from "../../utilComponents/paragraph/Paragraph";
import RenderPhotos from "../../utilComponents/renderPhotos/RenderPhotos";

const Event = ({ event }) => {
  return (
    <div id={event._id}>
      <h5>{event.title}</h5>
      <Paragraph textContent={event.textContent} />
      <RenderPhotos images={event.imageContentUrl} />
    </div>
  );
};

export default Event;
