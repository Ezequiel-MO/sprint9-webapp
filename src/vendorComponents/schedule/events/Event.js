import RenderPhotos from "../../utilComponents/RenderPhotos";

const Event = ({ event }) => {
  return (
    <div>
      <h5>{event.title}</h5>
      <p>{event.textContent}</p>
      <RenderPhotos images={event.imageContentUrl} />
    </div>
  );
};

export default Event;
