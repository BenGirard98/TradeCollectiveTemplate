import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { trades } from "../data/trades";
import TradeDetails from "./TradeDetails";
import NavButton from "./NavButton";

import "./TradeExploration.css";

const TradeExploration: React.FC = () => {
  const { tradeName } = useParams<{ tradeName: string }>();
  const navigate = useNavigate();
  const trade = trades.find((trade) => trade.title === tradeName);

  if (!trade) {
    return <div>Trade not found</div>;
  }

  if (trade.data == null) {
    return (
      <div className="trade-exploration">
        <NavButton to="/main" label="Back to Main" />
        <img
          src={trade.image}
          alt={trade.title}
          className="trade-exploration-image"
        />
        <h1>{trade.title}</h1>
      </div>
    );
  }

  return <TradeDetails {...trade.data} />;
};

export default TradeExploration;
