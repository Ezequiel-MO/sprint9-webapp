import { Typography } from "@mui/material";
import { InfoMarkerContainer } from "./styles";
import { Link } from "react-scroll";

export default function InfoMarker({ selectedLocation }) {
  return (
    <Link to={selectedLocation.id} smooth={true} duration={500} spy={true}>
      <InfoMarkerContainer>
        <Typography variant='h6'>{selectedLocation.name}</Typography>
      </InfoMarkerContainer>
    </Link>
  );
}
