import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import Layout from "./pages/layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/app' element={<Layout />} />
        <Route path='/' element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
