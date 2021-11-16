import RenderPhotos from "../../utilComponents/renderPhotos/RenderPhotos";

const Lunch = ({ lunchOption }) => {
  return (
    <div id={lunchOption._id}>
      <h5>{lunchOption.name}</h5>
      <p>{lunchOption.textContent}</p>
      <RenderPhotos images={lunchOption.imageContentUrl} />
    </div>
  );
};

export default Lunch;
