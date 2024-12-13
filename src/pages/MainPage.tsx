import { useState } from "react";
import "../App.css";
import TradeCard from "../components/TradeCard";
import TradeInfoModal from "../components/TradeInfoModal";
import { useNavigate } from "react-router-dom";

import { trades } from "../data/trades";
import { Trade } from "../types/Trade";

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

  return (
    <div className="content">
      <div className="trade-list">
        {trades.map((trade) => (
          <TradeCard
            key={trade.title}
            {...trade}
            onClick={() => handleCardClick(trade)}
          />
        ))}
      </div>
      {selectedTrade && (
        <TradeInfoModal
          trade={selectedTrade}
          onClose={closeModal}
          onLaunchInfo={handleLaunchInfo}
        />
      )}
    </div>
  );
};

export default MainPage;
