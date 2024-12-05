import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { trades } from "../data/trades";
import "./TradeExploration.css";

const TradeExploration: React.FC = () => {
  const { tradeName } = useParams<{ tradeName: string }>();
  const navigate = useNavigate();
  const trade = trades.find((trade) => trade.title === tradeName);

  if (!trade) {
    return <div>Trade not found</div>;
  }

  const handleBackClick = () => {
    navigate("/main");
  };

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
};

export default TradeExploration;
