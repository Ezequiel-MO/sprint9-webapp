import { Box } from "@mui/material";
import styled from "styled-components";

export const MapContainer = styled(Box)`
  position: absolute;
  top: 10%;
  left: 10%;
  right: 10%;
  bottom: 10%;
  overflow: hidden;
`;

export const InfoMarkerContainer = styled.div`
  padding: 1rem;
  color: #000;
  cursor: pointer;
`;
