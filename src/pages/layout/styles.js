import { Paper } from "@mui/material";
import styled from "styled-components";

export const ScAppBodyRoot = styled(Paper)`
  padding: 2rem;
  margin: 4.2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60rem;
  //if darkMode is true, change background color
  background-color: ${({ darkMode }) => (darkMode ? "#7f847a" : "#fff")};
  color: ${({ darkMode }) => (darkMode ? "#fff" : "#7f847a")};
`;

export const ScLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
`;
