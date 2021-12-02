import { Typography } from "@mui/material";
import parse from "html-react-parser";

const Paragraph = ({ textContent }) => {
  //parse an array of strings,
  const textContentString = JSON.parse(textContent);

  return (
    <Typography variant='body' paragraph>
      {parse(`${textContentString}`)}
    </Typography>
  );
};

export default Paragraph;
