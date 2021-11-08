import { useState } from "react";

const EnterCodeForm = ({ handleSubmit }) => {
  const [userCode, setUserCode] = useState("");

  return (
    <form onSubmit={(e) => handleSubmit(e, userCode)}>
      <input
        type='text'
        value={userCode}
        onChange={(e) => setUserCode(e.target.value)}
      />
      <input type='submit' value='Submit your code' />
    </form>
  );
};

export default EnterCodeForm;
