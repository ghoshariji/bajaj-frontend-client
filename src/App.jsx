import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Leader from "./pages/leaderBoard";
import SettingsPage from "./pages/Settings";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/leader" element={<Leader />} />
        <Route path="/setting" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
