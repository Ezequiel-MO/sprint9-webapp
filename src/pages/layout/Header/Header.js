import {
  ScAppBar,
  ScToolbar,
  HeaderLeft,
  ScButton,
  HeaderRight,
} from "./styles";
import { Icon } from "@iconify/react";
import logo from "../../../assets/logo.svg";
import logoDark from "../../../assets/logoDark.svg";
import { Link } from "react-router-dom";
import HideOnScroll from "./headerElements/HideOnScroll";
import { IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDarkMode,
  TOGGLE_DARKMODE,
} from "../../../features/DarkModeSlice";
import { useState } from "react";
import CentralModal from "./headerElements/CentralModal";

const Header = ({ handleDrawerToggle, codeMatch }) => {
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();
  const [modal, setModal] = useState("closed");
  const handleOpen = (string) => setModal(string);
  const handleClose = () => setModal("closed");
  return (
    <>
      <HideOnScroll>
        <ScAppBar>
          <ScToolbar>
            <HeaderLeft>
              <button onClick={handleDrawerToggle}>
                <Icon icon='bytesize:menu' color='#ea5933' width='30' />
              </button>
              <Link to='/'>
                <img src={darkMode ? logoDark : logo} alt='company-logo' />
              </Link>
            </HeaderLeft>
            <HeaderRight>
              <IconButton onClick={() => dispatch(TOGGLE_DARKMODE(!darkMode))}>
                <Icon
                  icon={darkMode ? "octicon:sun-16" : "akar-icons:moon-fill"}
                  color={darkMode ? "yellow" : "blue"}
                  width='45'
                />
              </IconButton>
              <ScButton onClick={() => handleOpen("map")}>
                <span>
                  <Typography variant='overline'>Map ...</Typography>
                </span>
                <Icon
                  icon='emojione-monotone:world-map'
                  color='#ea5933'
                  width='45'
                />
                <span>
                  <Icon icon='mdi:chevron-down' color='#ea5933' width='24' />
                </span>
              </ScButton>
              <ScButton onClick={() => handleOpen("overview")}>
                <span>
                  <Typography variant='overline'>Overview ...</Typography>
                </span>
                <Icon
                  icon='grommet-icons:overview'
                  color='#ea5933'
                  width='45'
                />
                <span>
                  <Icon icon='mdi:chevron-down' color='#ea5933' width='24' />
                </span>
              </ScButton>
              <ScButton onClick={() => handleOpen("briefing")}>
                <span>
                  <Typography variant='overline'>Group Briefing ...</Typography>
                </span>
                <span>
                  <Icon icon='mdi:chevron-down' color='#ea5933' width='24' />
                </span>
                <Link to='/login' data-testid='avatar'>
                  <Icon icon='whh:avatar' color='#ea5933' width='42' />
                </Link>
              </ScButton>
            </HeaderRight>
          </ScToolbar>
        </ScAppBar>
      </HideOnScroll>
      <CentralModal
        open={modal === "overview"}
        handleClose={handleClose}
        codeMatch={codeMatch}
        typeOfModal='Overview'
      />
      <CentralModal
        open={modal === "map"}
        handleClose={handleClose}
        codeMatch={codeMatch}
        typeOfModal='Map'
      />
      <CentralModal
        open={modal === "briefing"}
        handleClose={handleClose}
        codeMatch={codeMatch}
        typeOfModal='Briefing'
      />
    </>
  );
};

export default Header;
