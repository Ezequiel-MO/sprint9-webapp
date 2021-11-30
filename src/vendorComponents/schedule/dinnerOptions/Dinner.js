import Paragraph from "../../utilComponents/paragraph/Paragraph";
import RenderPhotos from "../../utilComponents/renderPhotos/RenderPhotos";

const Dinner = ({ dinnerOption }) => {
  return (
    <div id={dinnerOption._id}>
      <h5>{dinnerOption.name}</h5>
      <Paragraph textContent={dinnerOption.textContent} />
      <RenderPhotos images={dinnerOption.imageContentUrl} />
    </div>
  );
};

export default Dinner;
