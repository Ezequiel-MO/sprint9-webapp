import RenderPhotos from "../../utilComponents/RenderPhotos";

const Lunch = ({ lunchOption }) => {
  return (
    <div>
      <h5>{lunchOption.name}</h5>
      <p>{lunchOption.textContent}</p>
      <RenderPhotos images={lunchOption.imageContentUrl} />
    </div>
  );
};

export default Lunch;
