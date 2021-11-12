import { Paper } from "@mui/material";
import styled from "styled-components";

export const ScAppBodyContainer = styled.div`
  display: flex;
`;

export const ScAppBodyRoot = styled(Paper)`
  padding: 2rem;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60rem;
`;

export const ScLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
`;
