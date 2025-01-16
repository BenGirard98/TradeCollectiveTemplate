import { useState } from "react";
import "../App.css";
import TradeCard from "../components/TradeCard";
import TradeInfoModal from "../components/TradeInfoModal";
import { trades } from "../data/trades";
import { Trade } from "../types/Trade";
import TradeIcons from "../components/TradeIcons";
import TradeIconRankings from "../components/TradeIconRankings";
import TradeInfoPage from "./TradeInfoPage";

export interface Icon {
  name: string;
  locked: boolean; // Locked state for the icon
}

const MainPage: React.FC = () => {
  const [activeContent, setActiveContent] = useState<string>(
    "TradeCards and Icons"
  );
  const [selectedTrade, setSelectedTrade] = useState<Trade | null>(null);

  //Trade Card and Icon Content
  const handleCardClick = (trade: Trade) => {
    setSelectedTrade(trade);
  };

  const closeModal = () => {
    setSelectedTrade(null);
  };

  const handleLaunchInfo = (trade: Trade) => {
    setActiveContent("TradeInfo");
  };

  // Functionality for Trade Icons
  const initialIcons: Icon[] = [
    { name: "A", locked: true },
    { name: "H", locked: true },
    { name: "F", locked: true },
    { name: "P", locked: true },
    { name: "Au", locked: true },
    { name: "Po", locked: true },
  ];

  const [icons, setIcons] = useState<(Icon | null)[]>(initialIcons);
  const [rankedIcons, setRankedIcons] = useState<(Icon | null)[]>(
    Array(initialIcons.length).fill(null)
  );
  const unlockIcon = (iconName: string) => {
    const updatedIcons = icons.map((icon) =>
      icon && icon.name === iconName ? { ...icon, locked: false } : icon
    );
    setIcons(updatedIcons);
  };

  const completeSection = () => {
    setActiveContent("TradeCards and Icons");
    if (selectedTrade != null) unlockIcon(selectedTrade.iconName);
    setSelectedTrade(null);
  };

  const handleDrop = (
    sourceIndex: number,
    targetIndex: number,
    source: "icons" | "rankedIcons",
    target: "icons" | "rankedIcons"
  ) => {
    const sourceSlots = source === "icons" ? icons : rankedIcons;
    const targetSlots = target === "icons" ? icons : rankedIcons;

    const draggedIcon = sourceSlots[sourceIndex];

    // Prevent actions for locked icons or if target is occupied
    if (!draggedIcon || draggedIcon.locked || targetSlots[targetIndex] !== null)
      return;

    if (sourceSlots == targetSlots) {
      const updatedSourceSlots = [...sourceSlots];
      updatedSourceSlots[sourceIndex] = null;
      updatedSourceSlots[targetIndex] = draggedIcon;

      if (target === "icons") setIcons(updatedSourceSlots);
      else setRankedIcons(updatedSourceSlots);
    } else {
      const updatedSourceSlots = [...sourceSlots];
      const updatedTargetSlots = [...targetSlots];

      updatedSourceSlots[sourceIndex] = null;
      updatedTargetSlots[targetIndex] = draggedIcon;

      // Update state based on source/target
      if (source === "icons") setIcons(updatedSourceSlots);
      else setRankedIcons(updatedSourceSlots);

      if (target === "icons") setIcons(updatedTargetSlots);
      else setRankedIcons(updatedTargetSlots);
    }
  };
  //End of TradeCard and Icon Content

  return (
    <>
      {activeContent == "TradeCards and Icons" ? (
        <div className="content-container">
          <div className="content">
            <div className="trade-cards">
              {trades.map((trade) => (
                <TradeCard
                  key={trade.title}
                  {...trade}
                  onClick={() => handleCardClick(trade)}
                />
              ))}
            </div>

            <div className="trade-icons-container">
              <TradeIcons
                slots={icons}
                onDrop={(...args) => handleDrop(...args)}
              />
            </div>

            <div className="trade-icon-rankings-container">
              <TradeIconRankings
                slots={rankedIcons}
                onDrop={(...args) => handleDrop(...args)}
              />
            </div>

            <div className="placeholder"></div>

            {selectedTrade && (
              <TradeInfoModal
                trade={selectedTrade}
                onClose={closeModal}
                onLaunchInfo={handleLaunchInfo}
              />
            )}
          </div>
        </div>
      ) : (
        <TradeInfoPage
          sections={selectedTrade?.sections ?? []}
          returnToMain={() => {
            setActiveContent("TradeCards and Icons");
          }}
          completeSection={completeSection}
        ></TradeInfoPage>
      )}
    </>
  );
};

export default MainPage;
