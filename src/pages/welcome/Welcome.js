import EnterCodeForm from "./enterCodeForm/EnterCodeForm";
import { WelcomeContainer } from "./styles";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Welcome = ({ compareCodes, codeMatch }) => {
  const navigate = useNavigate();
  useEffect(() => {
    //if codeMatch is true
    if (codeMatch) {
      //redirect to "./app" url
      navigate("/app", { state: { codeMatch } });
    }
  }, [codeMatch]);

  return (
    <WelcomeContainer>
      <h3>Welcome to your Quotation </h3>
      <h5>Enter the code that was provided in your email</h5>
      <EnterCodeForm handleSubmit={compareCodes} />
    </WelcomeContainer>
  );
};

export default Welcome;
