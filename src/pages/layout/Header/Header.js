import { HeaderContainer, HeaderLeft, HeaderRight } from "./styles";
import { Icon } from "@iconify/react";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { useState } from "react";
import SidebarMenu from "./sidebarMenu/SidebarMenu";

const Header = ({ codeMatch }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <IconButton onClick={toggleDrawer(true)}>
          <Icon icon='bytesize:menu' color='#ea5933' width='30' />
        </IconButton>
        <SidebarMenu
          anchor='left'
          toggleDrawer={toggleDrawer}
          open={open}
          codeMatch={codeMatch}
        />
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
      <HeaderRight>
        <Link to='/login' data-testid='avatar'>
          <Icon icon='whh:avatar' color='#ea5933' width='48' />
        </Link>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
