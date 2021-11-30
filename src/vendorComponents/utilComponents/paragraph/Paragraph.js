import parse from "html-react-parser";

const Paragraph = ({ textContent }) => {
  //parse an array of strings,
  const textContentString = JSON.parse(textContent);

  return <div>{parse(`${textContentString}`)}</div>;
};

export default Paragraph;
