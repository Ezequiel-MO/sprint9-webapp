import { Typography, Modal } from "@mui/material";
import OverviewTable from "./overview/overviewTable/OverviewTable";
import Briefing from "./groupBriefing/Briefing";
import { CentralModalContainer } from "./map/styles.js";
import { MapsApp } from "./map/MapsApp";

const CentralModal = ({ open, handleClose, codeMatch, typeOfModal }) => {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <CentralModalContainer typeOfModal={typeOfModal}>
          <Typography variant='h6' component='h2'>
            {typeOfModal}
          </Typography>
          {typeOfModal === "Map" ? (
            <MapsApp codeMatch={codeMatch} />
          ) : /* <Map codeMatch={codeMatch} /> */
          typeOfModal === "Overview" ? (
            <OverviewTable codeMatch={codeMatch} />
          ) : typeOfModal === "Briefing" ? (
            <Briefing codeMatch={codeMatch} />
          ) : null}
        </CentralModalContainer>
      </Modal>
    </div>
  );
};

export default CentralModal;
