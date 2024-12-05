import { useState } from "react";
import "../App.css";
import TradeCard from "../components/TradeCard";
import Modal from "../components/Modal";
import TradeExploration from "../components/TradeExploration.tsx";

import { trades } from "../data/trades";

const TradeInfoPage: React.FC = () => {
  return <TradeExploration />;
};

export default TradeInfoPage;
