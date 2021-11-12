import styled from "styled-components";

export const WelcomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80vw;
  height: 80vh;
  margin: auto;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  &:hover {
    box-shadow: 1px 1px 1px solid thistle;
  }
  & input[type="submit"] {
    display: none;
  }
  & svg {
    cursor: pointer;
  }
`;

export const TextInput = styled.input`
  flex: 1 0;
  min-width: 50px;
  min-height: 25px;
  padding-left: 5px;
  border: 0;
  &:focus {
    outline: none;
  }
`;
