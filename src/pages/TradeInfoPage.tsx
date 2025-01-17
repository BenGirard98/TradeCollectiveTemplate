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
  returnToMain: () => void;
  completeSection: () => void;
}

const TradeInfoPage: React.FC<TradeInfoPageProps> = ({
  sections,
  returnToMain,
  completeSection,
}) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);

  const markNextSectionActive = () => {
    if (activeSectionIndex === sections.length - 1) {
      completeSection();
    } else {
      setActiveSectionIndex((prev) => prev + 1);
    }
  };

  const allSectionsComplete = activeSectionIndex === sections.length - 1;

  const highlightedSections = sections.slice(0, activeSectionIndex + 1);

  return (
    <div className="trade-info-page">
      <div className="trade-info-content">
        <div className="displayed-content">
          <div className="close-button" onClick={(e) => returnToMain()}>
            X
          </div>
          {sections[activeSectionIndex].content}
        </div>
        <ProgressBar
          sections={sections}
          completedSections={highlightedSections}
        />
        <button className="next-section-button" onClick={markNextSectionActive}>
          {allSectionsComplete ? "Return to Trade Page" : "Next Section"}
        </button>
      </div>
    </div>
  );
};

export default TradeInfoPage;
