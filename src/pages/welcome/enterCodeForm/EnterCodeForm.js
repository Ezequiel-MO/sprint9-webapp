import { useState } from "react";
import { TextInput, Form } from "../styles";
import { Icon } from "@iconify/react";

const EnterCodeForm = ({ handleSubmit }) => {
  const [userCode, setUserCode] = useState("");

  return (
    <Form onSubmit={(e) => handleSubmit(e, userCode)}>
      <TextInput
        type='text'
        value={userCode}
        onChange={(e) => setUserCode(e.target.value)}
        placeholder='Enter your code'
      />
      <Icon
        icon='bi:x'
        width='30'
        height='30'
        onClick={() => setUserCode("")}
      />
      <input type='submit' />
    </Form>
  );
};

export default EnterCodeForm;
