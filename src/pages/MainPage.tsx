import { useState } from "react";
import "../App.css";
import TradeCard from "../components/TradeCard";
import Modal from "../components/Modal";

import { trades } from "../data/trades";

const MainPage: React.FC = () => {
  const [selectedTrade, setSelectedTrade] = useState<Trade | null>(null);

  const handleCardClick = (trade: Trade) => {
    setSelectedTrade(trade);
  };

  const closeModal = () => {
    setSelectedTrade(null);
  };

  return (
    <div>
      <div className="trade-list">
        {trades.map((trade) => (
          <TradeCard
            key={trade.title}
            {...trade}
            onClick={() => handleCardClick(trade)}
          />
        ))}
      </div>
      {selectedTrade && <Modal trade={selectedTrade} onClose={closeModal} />}
    </div>
  );
};

export default MainPage;
