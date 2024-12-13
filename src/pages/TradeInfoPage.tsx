import "../App.css";
import VideoPlayer from "../components/VideoPlayer.tsx";
import HVACVideo1 from "../assets/videos/WhatIsHVAC.mp4";
import HVACImg from "../assets/images/HVAC.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar.tsx";
import NavButton from "../components/NavButton.tsx";
import "./TradeInfoPage.css";

const TradeInfoPage: React.FC = () => {
  const sections = ["Introduction", "Video 1", "Quiz", "Video 2", "Summary"];
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const navigate = useNavigate();

  const markNextSectionComplete = () => {
    if (completedSections.length === sections.length) {
      navigate("/main"); // Navigate to the trade page when all sections are complete
    } else {
      const nextSection = sections.find(
        (section) => !completedSections.includes(section)
      );
      if (nextSection) {
        setCompletedSections((prev) => [...new Set([...prev, nextSection])]);
      }
    }
  };

  const allSectionsComplete = completedSections.length === sections.length;

  return (
    <div className="trade-info-content">
      <VideoPlayer src={HVACVideo1} poster={HVACImg} />
      <ProgressBar sections={sections} completedSections={completedSections} />
      <NavButton to="/" label="Return to Main Page" className="return-button" />
      <button onClick={markNextSectionComplete}>
        {allSectionsComplete ? "Return to Trade Page" : "Next Section"}
      </button>
    </div>
  );
};

export default TradeInfoPage;
