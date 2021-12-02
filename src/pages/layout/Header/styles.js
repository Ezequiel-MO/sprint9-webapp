import { AppBar, Toolbar } from "@mui/material";
import styled from "styled-components";

export const MainContainer = styled.main`
  padding-top: 1.5rem;
  background-color: ${({ darkMode }) => (darkMode ? "#22281B" : "#A9C4B5")};
`;

export const ScAppBar = styled(AppBar)``;

export const ScToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  flex: 0.1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & a img {
    width: 9rem;
  }
  & button {
    margin: 0.5rem;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

export const ScButton = styled.button`
  cursor: pointer;
  margin: 0.2rem 0.5rem;
  padding: 0.2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 12rem;
`;
