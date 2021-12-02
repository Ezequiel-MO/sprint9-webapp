import EnterCodeForm from "./enterCodeForm/EnterCodeForm";
import { WelcomeContainer } from "./styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { findCodeThatMatches } from "./utils";
import { useDispatch } from "react-redux";
import { SET_BUDGET_SCHEDULE } from "../../features/BudgetSlice";
import useGetProjects from "../../hooks/useGetProjects";

const Welcome = () => {
  // set the state for the project that matches the code
  const [codeMatch, setCodeMatch] = useState("");
  // get the projects from the database
  const { projects, loading } = useGetProjects();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //get the schedule from local storage

  useEffect(() => {
    //if codeMatch is true
    if (codeMatch) {
      //store codeMatchin local storage
      localStorage.setItem("schedule", JSON.stringify(codeMatch["schedule"]));
      //then dispatch the action to set the budget schedule
      dispatch(SET_BUDGET_SCHEDULE(codeMatch["schedule"]));
      //redirect to "./app" url
      navigate("/app", { state: { codeMatch } });
    } else {
      //else redirect to "./welcome" url
      navigate("/");
    }
  }, [codeMatch]);

  //submit function
  const compareCodes = (e, userCode) => {
    e.preventDefault();
    //iterate projects and find the code that matches the user code
    const codeMatch = findCodeThatMatches(projects, userCode);
    //update the state with the code match
    setCodeMatch(codeMatch);
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
