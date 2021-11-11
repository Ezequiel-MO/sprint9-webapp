import parse from "html-react-parser";

const Paragraph = ({ textContent }) => {
  console.log("text content=>", textContent);
  return (
    <div>
      {textContent.map((item, index) => {
        return <p key={index}>{parse(item)}</p>;
      })}
    </div>
  );
};

export default Paragraph;
