import { useState } from "react";
import EnterCodeForm from "./enterCodeForm/EnterCodeForm";

const compareCodes = (e, userCode) => {
  e.preventDefault();
  console.log("codes compared", userCode);
};

const Welcome = () => {
  //input code from user
  //fetch data from server
  const [data, setData] = useState([]);

  return <EnterCodeForm handleSubmit={compareCodes} />;
};

export default Welcome;
