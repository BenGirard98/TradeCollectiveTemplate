import React from "react";
import "./TradeCard.css";
import { Trade } from "../types/Trade";

const TradeCard: React.FC<Trade> = ({
  image,
  title,
  cardDescription,
  onClick,
}) => {
  return (
    <div className="trade-card">
      <img src={image} alt={title} className="trade-card-image" />
      <div className="trade-card-content">
        <h3 className="trade-card-title">{title}</h3>
        <p className="trade-card-description">{cardDescription}</p>
        <button onClick={onClick} className="trade-card-button">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default TradeCard;
