import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import Layout from "./pages/layout/Layout";
import { useState } from "react";
import useGetProjects from "./hooks/useGetProjects";
import { findCodeThatMatches } from "./pages/welcome/utils";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { SET_BUDGET_SCHEDULE } from "./features/BudgetSlice";

function App() {
  // set the state for the code that matches the project with user input
  const [codeMatch, setCodeMatch] = useState("");
  const dispatch = useDispatch();
  //retrieve the projects from the database via a custom hook
  const { projects } = useGetProjects();

  useEffect(() => {
    //then dispatch the action to set the budget schedule
    dispatch(SET_BUDGET_SCHEDULE(codeMatch["schedule"]));
  }, [codeMatch]);
  //submit function
  const compareCodes = (e, userCode) => {
    e.preventDefault();
    //iterate projects and find the code that matches the user code
    const codeMatch = findCodeThatMatches(projects, userCode);
    //update the state with the code match
    setCodeMatch(codeMatch);
  };

  console.log("code match here=>", codeMatch);

  return (
    <Router>
      <Routes>
        <Route path='/app' element={<Layout />} />
        <Route
          path='/'
          element={
            <Welcome compareCodes={compareCodes} codeMatch={codeMatch} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
