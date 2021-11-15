import Header from "./Header/Header";
import AppBody from "./appBody/AppBody";
import { ScAppBodyContainer } from "./styles";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const {
    state: { codeMatch },
  } = useLocation();

  console.log("layout code match=>", codeMatch);
  return (
    <div>
      <Header codeMatch={codeMatch} />
      <ScAppBodyContainer>
        <AppBody codeMatch={codeMatch} />
      </ScAppBodyContainer>
    </div>
  );
};

export default Layout;
