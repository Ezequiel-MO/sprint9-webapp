import { Box } from "@mui/material";
import styled, { css } from "styled-components";

const mapStyles = css`
  position: absolute;
  top: 10%;
  left: 10%;
  right: 10%;
  bottom: 10%;
  overflow: hidden;
`;

const overviewAndBriefingStyles = css`
  position: absolute;
  top: 10%;
  left: 10%;
  right: 10%;
  bottom: fit-content;
  overflow: hidden;
`;

export const CentralModalContainer = styled(Box)`
  //if prop typeOfModal === "Map", then style with mapStyles
  ${({ typeOfModal }) => typeOfModal === "Map" && mapStyles}
  ${({ typeOfModal }) => typeOfModal !== "Map" && overviewAndBriefingStyles}
`;

export const InfoMarkerContainer = styled.div`
  padding: 1rem;
  color: #000;
  cursor: pointer;
`;
