import { HeaderContainer, HeaderLeft, HeaderRight } from "./styles";
import { Icon } from "@iconify/react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <button>
          <Icon icon='bytesize:menu' color='#ea5933' width='30' />
        </button>
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
