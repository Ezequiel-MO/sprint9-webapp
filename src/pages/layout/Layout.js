import Header from "./Header/Header";
import AppBody from "./appBody/AppBody";
import { ScLayoutRoot } from "./styles";

const Layout = () => {
  return (
    <ScLayoutRoot>
      <Header />
      <main>
        <AppBody />
      </main>
    </ScLayoutRoot>
  );
};

export default Layout;
