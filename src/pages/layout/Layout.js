import Header from "./Header/Header";
import AppBody from "./appBody/AppBody";
import { ScAppBodyContainer } from "./styles";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScAppBodyContainer>
        <AppBody />
      </ScAppBodyContainer>
    </div>
  );
};

export default Layout;
