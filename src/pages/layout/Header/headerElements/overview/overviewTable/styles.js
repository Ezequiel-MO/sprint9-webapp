import { TableRow, Typography } from "@mui/material";
import styled from "styled-components";

export const ScTableRow = styled(TableRow)`
  background-color: #ea5933;
`;

export const ScTypography = styled(Typography)`
  display: flex;
  align-items: center;
  & span {
    margin-left: 10px;
  }
`;
