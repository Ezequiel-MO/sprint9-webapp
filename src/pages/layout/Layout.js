import { useState } from "react";
import { Drawer, Hidden } from "@mui/material";
import ScrollToTop from "react-scroll-to-top";
import Header from "./Header/Header";
import SidebarMenu from "./Header/headerElements/sidebarMenu/SidebarMenu";
import AppBody from "./appBody/AppBody";
import { useLocation } from "react-router-dom";
import { MainContainer } from "./Header/styles";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../features/DarkModeSlice";

const Layout = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const darkMode = useSelector(selectDarkMode);

  const {
    state: { codeMatch },
  } = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <ScrollToTop smooth />
      <nav>
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor='left'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <SidebarMenu codeMatch={codeMatch} />
          </Drawer>
        </Hidden>
      </nav>
      <Header handleDrawerToggle={handleDrawerToggle} codeMatch={codeMatch} />
      <MainContainer darkMode={darkMode}>
        <AppBody codeMatch={codeMatch} />
      </MainContainer>
    </>
  );
};

export default Layout;
