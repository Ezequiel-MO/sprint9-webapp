import RenderPhotos from "../../utilComponents/RenderPhotos";

const Dinner = ({ dinnerOption }) => {
  return (
    <div>
      <h5>{dinnerOption.name}</h5>
      <p>{dinnerOption.textContent}</p>
      <RenderPhotos images={dinnerOption.imageContentUrl} />
    </div>
  );
};

export default Dinner;
