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
  background-color: ${({ darkMode }) => (darkMode ? "#7f847a" : "#f5f1e9")};
  color: ${({ darkMode }) => (darkMode ? "#f5f1e9" : "#7f847a")};
`;

export const ScLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

export const pageStyle = `
  @media all {
    .page-break {
      display: none;
    }
  }
  
  @media print {
    html, body {
      height: initial !important;
      overflow: auto !important;
      -webkit-print-color-adjust: exact;
    }
  }
  
  @media print {
    .page-break {
      margin-top: 2rem;
      padding: 1rem;
      display: block;
      page-break-before: always;
    }
  }
  
  @page {
    size: landscape;
    margin: 20mm;

  }
`;
