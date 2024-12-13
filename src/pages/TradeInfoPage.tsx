import "../App.css";
import VideoPlayer from "../components/VideoPlayer.tsx";
import HVACVideo1 from "../assets/videos/WhatIsHVAC.mp4";
import HVACImg from "../assets/images/HVAC.jpg";
import DITLImg from "../assets/images/Construction.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar.tsx";
import "./TradeInfoPage.css";

const TradeInfoPage: React.FC = () => {
  const sections = [
    "Introduction",
    "Typical Day",
    "Pathways",
    "Salary/Career Progression",
    "Local Employers",
    "Summary",
  ];
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);
  const navigate = useNavigate();

  const markNextSectionActive = () => {
    if (activeSectionIndex === sections.length - 1) {
      navigate("/main"); // Navigate to the trade page when all sections are complete
    } else {
      setActiveSectionIndex((prev) => prev + 1);
    }
  };

  const allSectionsComplete = activeSectionIndex === sections.length - 1;

  const highlightedSections = sections.slice(0, activeSectionIndex + 1);

  const renderSectionContent = () => {
    switch (sections[activeSectionIndex]) {
      case "Introduction":
        return (
          <div>
            <h2>Welcome to HVAC Trade Information</h2>
            <VideoPlayer src={HVACVideo1} poster={HVACImg} />
          </div>
        );
      case "Typical Day":
        return (
          <div>
            <h2>A Day in the Life</h2>
            <VideoPlayer src={HVACVideo1} poster={DITLImg} />
          </div>
        );
      case "Pathways":
        return (
          <div>
            <h2>Training and Certification Pathways</h2>
            <p>
              Learn about the educational and certification pathways available
              to start your career.
            </p>
          </div>
        );
      case "Salary/Career Progression":
        return (
          <div>
            <h2>Salary and Career Progression</h2>
            <p>
              Discover potential salaries and career growth opportunities in
              HVAC.
            </p>
          </div>
        );
      case "Local Employers":
        return (
          <div>
            <h2>Employers in Your Area</h2>
            <p>Get to know some local employers hiring in the HVAC industry.</p>
          </div>
        );
      case "Summary":
        return (
          <div>
            <h2>Summary</h2>
            <p>
              Recap what you've learned and take the next steps toward your HVAC
              career.
            </p>
          </div>
        );
      default:
        return <div>Unknown Section</div>;
    }
  };

  return (
    <div className="trade-info-content">
      <div className="displayed-content">
        <div className="close-button" onClick={() => navigate("/main")}>
          X
        </div>
        {renderSectionContent()}
      </div>
      <ProgressBar
        sections={sections}
        completedSections={highlightedSections}
      />
      <button onClick={markNextSectionActive}>
        {allSectionsComplete ? "Return to Trade Page" : "Next Section"}
      </button>
    </div>
  );
};

export default TradeInfoPage;
