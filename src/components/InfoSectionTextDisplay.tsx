import React from "react";
import "./InfoSection.css";
import "./InfoSectionTextDisplay.css";

interface TextDisplayProps {
  title: string;
  content: string;
}

const InfoSectionTextDisplay: React.FC<TextDisplayProps> = ({
  title,
  content,
}) => {
  return (
    <div className="info-section-container">
      {title ? <h2>{title}</h2> : <></>}
      {content ? <div className="text-display-content">{content}</div> : <></>}
    </div>
  );
};

export default InfoSectionTextDisplay;
