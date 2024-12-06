import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { trades } from "../data/trades";
import TradeDetails from "./TradeDetails";

import "./TradeExploration.css";

const TradeExploration: React.FC = () => {
  const { tradeName } = useParams<{ tradeName: string }>();
  const navigate = useNavigate();
  const trade = trades.find((trade) => trade.title === tradeName);

  const handleBackClick = () => {
    navigate("/main");
  };

  if (!trade) {
    return <div>Trade not found</div>;
  }

  if (trade.data == null) {
    return (
      <div className="trade-exploration">
        <button onClick={handleBackClick} className="back-button">
          Back to Trades
        </button>
        <img
          src={trade.image}
          alt={trade.title}
          className="trade-exploration-image"
        />
        <h1>{trade.title}</h1>
        <p>{trade.description}</p>
        {/* Add more details, videos, links, etc., as needed */}
      </div>
    );
  }

  return <TradeDetails {...trade.data} />;
};

export default TradeExploration;
