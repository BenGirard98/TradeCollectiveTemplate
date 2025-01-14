import React from "react";
import "./ProgressBar.css";
import arrowPNG from "../assets/pngs/Arrow.png";
import { Section } from "../pages/TradeInfoPage";

interface ProgressBarProps {
  sections: Section[]; // Array of sections
  completedSections: Section[]; // Array of completed sections
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  sections,
  completedSections,
}) => {
  return (
    <div className="progress-bar-container">
      {sections.map((section, index) => {
        const isCompleted = completedSections.includes(section);
        return (
          <React.Fragment key={index}>
            <div
              className={`progress-bar-section ${
                isCompleted ? "completed" : ""
              }`}
            >
              {section.name}
            </div>
            {index < sections.length - 1 && (
              <img src={arrowPNG} alt="arrow" className="progress-bar-arrow" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProgressBar;
