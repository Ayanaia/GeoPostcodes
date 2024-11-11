import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import DataExplorer from "./pages/DataExplorer/DataExplorer";
import Navbar from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/data-explorer" element={<DataExplorer />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
