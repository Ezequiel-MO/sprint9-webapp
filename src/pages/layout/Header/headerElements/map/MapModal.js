import { Typography, Modal } from "@mui/material";
import Map from "./mapContent/Map";

import { MapContainer } from "./mapContent/styles";

export default function MapModal({ open, handleClose, codeMatch }) {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <MapContainer>
          <Typography variant='h6' component='h2'>
            Map
          </Typography>
          <Map codeMatch={codeMatch} />
        </MapContainer>
      </Modal>
    </div>
  );
}
