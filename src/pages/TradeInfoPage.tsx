import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar.tsx";
import "./TradeInfoPage.css";

export type Section = {
  name: string;
  content: React.ReactNode;
};

interface TradeInfoPageProps {
  sections: Section[];
}

const TradeInfoPage: React.FC<TradeInfoPageProps> = ({ sections }) => {
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

  return (
    <div className="trade-info-content">
      <div className="displayed-content">
        <div className="close-button" onClick={() => navigate("/main")}>
          X
        </div>
        {sections[activeSectionIndex].content}
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
