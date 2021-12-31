import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { selectDarkMode } from "./features/DarkModeSlice";
import { routes } from "./routes/routes";
import { Suspense } from "react";

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
    },
    typography: {
      fontFamily: "Barlow Condensed",
      fontSize: 18,
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightBold: 700,
      h5: {
        backgroundColor: "#ea5933",
        color: "#fff",
        padding: "0.5rem",
        marginBottom: "0.5rem",
        width: "fit-content",
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
      <Suspense fallback={<span>Loading ...</span>}>
        <BrowserRouter>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path='/' element={<Welcome />} />
            <Route path='/*' element={<Navigate to='/' replace />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
