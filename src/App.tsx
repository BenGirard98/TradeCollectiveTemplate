import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TradeCard from "./components/TradeCard";

import { trades } from "./data/trades";

function App() {
  return (
    <div className="trade-list">
      {trades.map((trade, index) => (
        <TradeCard
          key={index}
          image={trade.image}
          title={trade.title}
          description={trade.description}
          onClick={trade.onClick}
        />
      ))}
    </div>
  );
}

export default App;
