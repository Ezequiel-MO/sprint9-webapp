import { Paper } from "@mui/material";
import styled from "styled-components";

export const ScAppBodyContainer = styled.div`
  border: 1px solid red;
`;

export const ScAppBodyRoot = styled(Paper)`
  padding: 2rem;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60rem;
`;

export const ScLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
`;
