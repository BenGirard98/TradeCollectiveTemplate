import React from "react";
import "./TradeIconRankings.css";

interface TradeIconRankingsProps {
  rankedIcons: string[];
  onDrop: (event: React.DragEvent) => void;
  onDragOver: (event: React.DragEvent) => void;
}

const TradeIconRankings: React.FC<TradeIconRankingsProps> = ({
  rankedIcons,
  onDrop,
  onDragOver,
}) => {
  return (
    <div
      className="trade-icon-rankings-container"
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      {rankedIcons.map((letter, index) => (
        <div key={index} className="ranked-icon" draggable={true}>
          {letter}
        </div>
      ))}
    </div>
  );
};

export default TradeIconRankings;
