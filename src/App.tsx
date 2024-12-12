import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HeaderComponent from "./components/HeaderComponent";
import "./App.css";

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
