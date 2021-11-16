import { useState } from "react";
import {
  CssBaseline,
  useScrollTrigger,
  Slide,
  Drawer,
  Hidden,
} from "@mui/material";
import ScrollToTop from "react-scroll-to-top";
import Header from "./Header/Header";
import SidebarMenu from "./Header/sidebarMenu/SidebarMenu";
import AppBody from "./appBody/AppBody";
import { useLocation } from "react-router-dom";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

const Layout = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const {
    state: { codeMatch },
  } = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <ScrollToTop smooth />
      <CssBaseline />

      <Header handleDrawerToggle={handleDrawerToggle} />

      <nav>
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor='right'
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
      <main>
        <AppBody codeMatch={codeMatch} />
      </main>
    </div>
  );
};

export default Layout;
