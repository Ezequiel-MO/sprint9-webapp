import { Typography, Modal } from "@mui/material";
import { CentralModalContainer } from "./map/mapContent/styles";
import Map from "./map/mapContent/Map";
import OverviewTable from "./overview/overviewTable/OverviewTable";
import Briefing from "./groupBriefing/Briefing";

const CentralModal = ({ open, handleClose, codeMatch, typeOfModal }) => {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <CentralModalContainer typeOfModal={typeOfModal}>
          <Typography variant='h6' component='h2'>
            {typeOfModal}
          </Typography>
          {typeOfModal === "Map" ? (
            <Map codeMatch={codeMatch} />
          ) : typeOfModal === "Overview" ? (
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
