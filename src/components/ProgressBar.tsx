import React from "react";
import "./ProgressBar.css";
import arrowPNG from "../assets/pngs/Arrow.png";

interface ProgressBarProps {
  sections: string[]; // Array of section names
  completedSections: string[]; // Array of completed section names
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
              {section}
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
