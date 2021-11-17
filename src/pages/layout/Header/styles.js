import { AppBar, Toolbar } from "@mui/material";
import styled from "styled-components";

export const ScAppBar = styled(AppBar)`
  height: 5rem;
`;

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
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 12rem;
  }
`;
