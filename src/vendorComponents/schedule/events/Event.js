import RenderPhotos from "../../utilComponents/renderPhotos/RenderPhotos";

const Event = ({ event }) => {
  return (
    <div id={event._id}>
      <h5>{event.title}</h5>
      <p>{event.textContent}</p>
      <RenderPhotos images={event.imageContentUrl} />
    </div>
  );
};

export default Event;
