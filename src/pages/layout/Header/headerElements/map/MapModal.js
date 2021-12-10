import { Typography, Modal } from "@mui/material";
import Map from "./mapContent/Map";

import { OverviewContainer } from "../overview/styles";

export default function MapModal({ open, handleClose, codeMatch }) {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <OverviewContainer>
          <Typography variant='h6' component='h2'>
            Map
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <Map codeMatch={codeMatch} />
          </Typography>
        </OverviewContainer>
      </Modal>
    </div>
  );
}
