import React from "react";
import "./TradeCard.css";

interface TradeCardProps {
  image: string; // URL or import path for the image
  title: string; // Title of the trade
  description: string; // Short description
  onClick: () => void; // Function to handle "Learn More" click
}

const TradeCard: React.FC<TradeCardProps> = ({
  image,
  title,
  description,
  onClick,
}) => {
  return (
    <div className="trade-card">
      <img src={image} alt={title} className="trade-card-image" />
      <div className="trade-card-content">
        <h3 className="trade-card-title">{title}</h3>
        <p className="trade-card-description">{description}</p>
        <button onClick={onClick} className="trade-card-button">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default TradeCard;
