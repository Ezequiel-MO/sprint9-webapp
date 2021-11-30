import Paragraph from "../../utilComponents/paragraph/Paragraph";
import RenderPhotos from "../../utilComponents/renderPhotos/RenderPhotos";

const Lunch = ({ lunchOption }) => {
  return (
    <div id={lunchOption._id}>
      <h5>{lunchOption.name}</h5>
      <Paragraph textContent={lunchOption.textContent} />
      <RenderPhotos images={lunchOption.imageContentUrl} />
    </div>
  );
};

export default Lunch;
