import React, { useState } from "react";
import "./InfoSection.css";
import "./InfoSectionForm.css";

interface FormProps {
  title: string;
  content: string;
  onSubmit?: (response: string) => void; // Callback for handling the submitted response
}

const InfoSectionForm: React.FC<FormProps> = ({ title, content, onSubmit }) => {
  const [response, setResponse] = useState("");

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(response);
    }
    setResponse(""); // Clear the input after submission
  };

  return (
    <div className="info-section-container">
      {title && <h2>{title}</h2>}
      {content && <div className="text-display-content">{content}</div>}

      <div className="info-section-response">
        <textarea
          placeholder="Enter your response here..."
          value={response}
          onChange={(e) => setResponse(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InfoSectionForm;
