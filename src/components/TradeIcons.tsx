import React, { useState } from "react";
import "./TradeIcons.css";

interface TradeIcon {
  letter: string;
  isUnlocked: boolean;
  isRemoved: boolean;
  isPlaceholder: boolean;
}

interface TradeIconsProps {
  icons: TradeIcon[];
  setIcons: React.Dispatch<React.SetStateAction<TradeIcon[]>>; // Accept setIcons as a prop
  onDragStart: (event: React.DragEvent, letter: string) => void;
  onDragEnd: (event: React.DragEvent, letter: string) => void;
}

const TradeIcons: React.FC<TradeIconsProps> = ({
  icons,
  setIcons, // Destructure setIcons from props
  onDragStart,
  onDragEnd,
}) => {
  const [draggingLetter, setDraggingLetter] = useState<string | null>(null);

  const handleDragStart = (event: React.DragEvent, letter: string) => {
    setDraggingLetter(letter); // Store the dragged icon's letter
    onDragStart(event, letter); // Call the passed function
  };

  const handleDragEnd = (event: React.DragEvent, letter: string) => {
    setDraggingLetter(null); // Reset the dragging state
    onDragEnd(event, letter); // Call the passed function
  };

  const handleDropInVertical = (event: React.DragEvent, letter: string) => {
    const droppedLetter = event.dataTransfer.getData("text/plain");

    setIcons((prev) =>
      prev.map((icon) =>
        icon.letter === droppedLetter
          ? { ...icon, isRemoved: true } // Mark the dropped icon as removed
          : icon
      )
    );
  };

  return (
    <div className="trade-icons-container">
      {icons.map((icon, index) => {
        // If the icon is a placeholder, show the placeholder div
        if (icon.isPlaceholder) {
          return <div key={index} className="trade-icon-placeholder"></div>;
        }

        return (
          <div
            key={index}
            className={`trade-icon ${
              icon.isRemoved
                ? "removed"
                : icon.isUnlocked
                ? "unlocked"
                : "locked"
            } ${draggingLetter === icon.letter ? "dragging" : ""}`}
            draggable={icon.isUnlocked && !icon.isRemoved}
            onDragStart={(e) => handleDragStart(e, icon.letter)}
            onDragEnd={(e) => handleDragEnd(e, icon.letter)}
            onDrop={(e) => handleDropInVertical(e, icon.letter)}
          >
            {icon.letter}
          </div>
        );
      })}
    </div>
  );
};

export default TradeIcons;
