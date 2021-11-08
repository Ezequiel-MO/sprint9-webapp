import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AppBody from "./pages/appBody/AppBody";
import Welcome from "./pages/welcome/Welcome";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/app' element={<AppBody />} />
        <Route path='/' element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
