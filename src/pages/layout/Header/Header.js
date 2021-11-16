import { ScAppBar, ScToolbar, HeaderLeft } from "./styles";
import { Icon } from "@iconify/react";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { IconButton, Toolbar } from "@mui/material";

const Header = ({ handleDrawerToggle }) => {
  return (
    <ScAppBar>
      <ScToolbar>
        <HeaderLeft>
          <IconButton onClick={handleDrawerToggle}>
            <Icon icon='bytesize:menu' color='#ea5933' width='30' />
          </IconButton>
          <Link to='/'>
            <img src={logo} alt='company-logo' />
          </Link>
          <button>
            active code
            <span>
              <Icon icon='mdi:chevron-down' color='#ea5933' width='24' />
            </span>
          </button>
        </HeaderLeft>

        <Link to='/login' data-testid='avatar'>
          <Icon icon='whh:avatar' color='#ea5933' width='48' />
        </Link>
      </ScToolbar>
    </ScAppBar>
  );
};

export default Header;
