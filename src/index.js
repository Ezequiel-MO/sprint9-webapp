import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    /*     type: darkMode ? "dark" : "light", */
    primary: {
      main: /* darkMode ? "#22281b" : */ "#DDBCB0",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ea5933",
      contrastText: "#fff",
    },
  },
  overrides: {
    MuiTreeItem: {
      iconContainer: {
        color: "#ea5933",
      },
      label: {
        color: "#ea5933",
        fontSize: 18,
        "&&:hover": {
          backgroundColor: "#DDBCB0",
          color: "#22281b",
        },
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
