import { useEffect, useState } from "react";
import "../App.css";
import TradeCard from "../components/TradeCard";
import TradeInfoModal from "../components/TradeInfoModal";
import { trades } from "../data/trades";
import { Trade } from "../types/Trade";
import TradeIcons from "../components/TradeIcons";
import TradeIconRankings from "../components/TradeIconRankings";
import TradeInfoPage from "./TradeInfoPage";
import logoPng from "../assets/pngs/TC_POS_COLOR_01.png";

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
  const initialIcons: Icon[] = trades.map((trade) => ({
    name: trade.iconName,
    locked: true,
  }));

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

  //css code
  // Inside your component
  const [forceColumnWidth, setForceColumnWidth] = useState(false);
  const [columnWidth, setColumnWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const maxCards = Math.floor((screenWidth - 66) / 268);
      const scrollBarWidth = trades.length > maxCards * 2 ? 22 : 0;
      setColumnWidth(maxCards * 268 + scrollBarWidth); // Adjust the width
    };

    // Set initial column width
    if (!forceColumnWidth) {
      handleResize();
    }

    // Update column width on window resize
    window.addEventListener("resize", handleResize);

    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {activeContent == "TradeCards and Icons" ? (
        <div className="content-container">
          <div
            className="content"
            style={{
              gridTemplateColumns: `${columnWidth}px 70px`, // Use the dynamic column width
            }}
          >
            <div className="trade-cards">
              {trades.map((trade) => (
                <TradeCard
                  key={trade.title}
                  {...trade}
                  onClick={() => handleCardClick(trade)}
                />
              ))}
            </div>

            <div className="trade-icons">
              <TradeIcons
                slots={icons}
                onDrop={(...args) => handleDrop(...args)}
              />
            </div>

            <div className="trade-icon-rankings">
              <TradeIconRankings
                slots={rankedIcons}
                onDrop={(...args) => handleDrop(...args)}
              />
            </div>

            <img
              className="placeholder"
              src={logoPng}
              onClick={() => {
                setColumnWidth(820);
              }}
              alt="Placeholder"
            />

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
