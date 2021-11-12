import { useState, useEffect } from "react";
import EnterCodeForm from "./enterCodeForm/EnterCodeForm";
import { findCodeThatMatches } from "./utils";
import { useNavigate } from "react-router-dom";
import useGetProjects from "../../hooks/useGetProjects";
import { WelcomeContainer } from "./styles";

const Welcome = () => {
  //initialize useNavigate hook
  const navigate = useNavigate();
  // set the state for the code that matches the project with user input
  const [codeMatch, setCodeMatch] = useState("");
  //retrieve the projects from the database via a custom hook
  const { projects } = useGetProjects();

  //console log codeMatch on useEffect
  useEffect(() => {
    console.log("code match =>", codeMatch);
    if (codeMatch) {
      //use navigate hook to redirect to the welcome page and pass the code match state
      navigate("/app", { state: { codeMatch } });
    } else alert("Please enter a valid code");
  }, [codeMatch]);

  //submit function
  const compareCodes = (e, userCode) => {
    e.preventDefault();
    console.log("codes compared", userCode);
    //iterate projects and find the code that matches the user code
    const codeMatch = findCodeThatMatches(projects, userCode);
    //update the state with the code match
    setCodeMatch(codeMatch);
    //if the code match is not empty, redirect to the welcome page
  };

  return (
    <WelcomeContainer>
      <h3>Welcome to your Quotation </h3>
      <h5>Enter the code that was provided in your email</h5>
      <EnterCodeForm handleSubmit={compareCodes} />
    </WelcomeContainer>
  );
};

export default Welcome;
