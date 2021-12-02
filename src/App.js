import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import Layout from "./pages/layout/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { selectDarkMode } from "./features/DarkModeSlice";

function App() {
  const darkMode = useSelector(selectDarkMode);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#282c36" : "#DDBCB0",
        contrastText: "#fff",
      },
      secondary: {
        main: "#ea5933",
        contrastText: "#ccc",
      },
      typography: {
        fontFamily: "Barlow Condensed",
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightBold: 700,
        /* h6: {
          color: "#ea5933",
        }, */
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
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/app' element={<Layout />} />
          <Route path='/' element={<Welcome />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
