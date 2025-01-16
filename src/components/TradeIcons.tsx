import React from "react";
import "./TradeIcons.css";

interface TradeIconsProps {
  slots: (string | null)[]; // Array representing the slots
  onDrop: (
    sourceIndex: number,
    targetIndex: number,
    source: "icons" | "rankedIcons",
    target: "icons" | "rankedIcons"
  ) => void;
}

const TradeIcons: React.FC<TradeIconsProps> = ({ slots, onDrop }) => {
  const handleDragStart = (event: React.DragEvent, index: number) => {
    event.dataTransfer.setData("sourceIndex", index.toString());
    event.dataTransfer.setData("source", "icons");
  };

  const handleDrop = (event: React.DragEvent, targetIndex: number) => {
    event.preventDefault();
    const sourceIndex = parseInt(event.dataTransfer.getData("sourceIndex"));
    const source = event.dataTransfer.getData("source") as
      | "icons"
      | "rankedIcons";

    onDrop(sourceIndex, targetIndex, source, "icons");
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault(); // Allow dropping
  };

  return (
    <div className="trade-icons-container">
      {slots.map((icon, index) => (
        <div
          key={index}
          className={`trade-icon-slot ${icon ? "filled" : "empty"}`}
          draggable={!!icon} // Only make filled slots draggable
          onDragStart={(e) => icon && handleDragStart(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          onDragOver={handleDragOver}
        >
          {icon || <span className="placeholder">Drop here</span>}
        </div>
      ))}
    </div>
  );
};

export default TradeIcons;
