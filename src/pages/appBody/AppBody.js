import { useLocation } from "react-router";

const AppBody = () => {
  //retrieve codeMatch from navigate() with useLocation()
  const {
    state: { codeMatch },
  } = useLocation();

  console.log("code match in app body=>", codeMatch);

  return <h1>I am the app body </h1>;
};

export default AppBody;
