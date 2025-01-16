import React from "react";
import "./TradeIcons.css";

interface TradeIconRankingsProps {
  slots: (string | null)[]; // Array representing the slots
  onDrop: (
    sourceIndex: number,
    targetIndex: number,
    source: "icons" | "rankedIcons",
    target: "icons" | "rankedIcons"
  ) => void;
}

const TradeIconRankings: React.FC<TradeIconRankingsProps> = ({
  slots,
  onDrop,
}) => {
  const handleDragStart = (event: React.DragEvent, index: number) => {
    event.dataTransfer.setData("sourceIndex", index.toString());
    event.dataTransfer.setData("source", "rankedIcons");
  };

  const handleDrop = (event: React.DragEvent, targetIndex: number) => {
    event.preventDefault();
    const sourceIndex = parseInt(event.dataTransfer.getData("sourceIndex"));
    const source = event.dataTransfer.getData("source") as
      | "icons"
      | "rankedIcons";

    onDrop(sourceIndex, targetIndex, source, "rankedIcons");
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault(); // Allow dropping
  };

  return (
    <div className="trade-icon-rankings-container">
      {slots.map((icon, index) => (
        <div
          key={index}
          className={`ranking-icon-slot ${icon ? "filled" : "empty"} ${
            !icon && index === 0 ? "first-empty" : ""
          }`}
          draggable={!!icon} // Only make filled slots draggable
          onDragStart={(e) => icon && handleDragStart(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          onDragOver={handleDragOver}
        >
          {icon || <span>{index + 1}</span>} {/* Show number for empty slots */}
        </div>
      ))}
    </div>
  );
};

export default TradeIconRankings;
