import { Typography, Modal } from "@mui/material";
import OverviewTable from "./overviewTable/OverviewTable";
import { OverviewContainer } from "./styles";

export default function Overview({ open, handleClose, codeMatch }) {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <OverviewContainer>
          <Typography variant='h6' component='h2'>
            Program Overview
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <OverviewTable codeMatch={codeMatch} />
          </Typography>
        </OverviewContainer>
      </Modal>
    </div>
  );
}
