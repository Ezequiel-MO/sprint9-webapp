import { ScAppBar, ScToolbar, HeaderLeft, ScButton } from "./styles";
import { Icon } from "@iconify/react";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useScrollTrigger, Slide } from "@mui/material";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = ({ handleDrawerToggle }) => {
  return (
    <HideOnScroll>
      <ScAppBar>
        <ScToolbar>
          <HeaderLeft>
            <button onClick={handleDrawerToggle}>
              <Icon icon='bytesize:menu' color='#ea5933' width='30' />
            </button>
            <Link to='/'>
              <img src={logo} alt='company-logo' />
            </Link>
            <ScButton>
              active code
              <span>
                <Icon icon='mdi:chevron-down' color='#ea5933' width='24' />
              </span>
            </ScButton>
          </HeaderLeft>
          <Link to='/login' data-testid='avatar'>
            <Icon icon='whh:avatar' color='#ea5933' width='48' />
          </Link>
        </ScToolbar>
      </ScAppBar>
    </HideOnScroll>
  );
};

export default Header;
