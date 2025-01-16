import { useState } from "react";
import "../App.css";
import TradeCard from "../components/TradeCard";
import TradeInfoModal from "../components/TradeInfoModal";
import { useNavigate } from "react-router-dom";

import { trades } from "../data/trades";
import { Trade } from "../types/Trade";
import TradeIcons from "../components/TradeIcons";
import TradeIconRankings from "../components/TradeIconRankings";

export interface Icon {
  name: string;
  locked: boolean; // Locked state for the icon
}

const MainPage: React.FC = () => {
  const [selectedTrade, setSelectedTrade] = useState<Trade | null>(null);

  const handleCardClick = (trade: Trade) => {
    setSelectedTrade(trade);
  };

  const closeModal = () => {
    setSelectedTrade(null);
  };

  const navigate = useNavigate();

  const handleLaunchInfo = (trade: Trade) => {
    console.log("Launching info for:", trade.title);
    navigate(`/tradeInfo/${trade.title}`);
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

    const updatedSourceSlots = [...sourceSlots];
    const updatedTargetSlots = [...targetSlots];

    updatedSourceSlots[sourceIndex] = null;
    updatedTargetSlots[targetIndex] = draggedIcon;

    // Update state based on source/target
    if (source === "icons") setIcons(updatedSourceSlots);
    else setRankedIcons(updatedSourceSlots);

    if (target === "icons") setIcons(updatedTargetSlots);
    else setRankedIcons(updatedTargetSlots);
  };

  return (
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
          <TradeIcons slots={icons} onDrop={(...args) => handleDrop(...args)} />
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
  );
};

export default MainPage;
