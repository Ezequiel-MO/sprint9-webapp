import { Typography } from "@mui/material";
import { InfoMarkerContainer } from "./styles";
import { Link } from "react-scroll";

export default function InfoMarker({ selectedLocation }) {
  return (
    <InfoMarkerContainer>
      <Link to={selectedLocation.id} smooth={true} duration={500}>
        <Typography variant='h6'>{selectedLocation.name}</Typography>
        {selectedLocation.id}
      </Link>
    </InfoMarkerContainer>
  );
}
