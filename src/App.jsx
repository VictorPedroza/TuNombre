import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Jogos from "./pages/Jogos";
import NavBar from "./NavBar";

export default function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jogos" 
          element={<Jogos />} />
        </Routes>
      </div>
    </Router>
  );
}
