import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import MainPage from "./pages/MainPage";
import TradeInfoPage from "./pages/TradeInfoPage";
import { hvacSections } from "./InfoPageSections/hvacSections";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route
          path="/tradeInfo/:tradeName"
          element={<TradeInfoPage sections={hvacSections} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
