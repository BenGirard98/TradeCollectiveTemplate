import React, { useState } from "react";
import "./IntroPage.css";
import NavButton from "../components/NavButton";
import tcLogo from "../assets/pngs/TC_POS_COLOR_01.png";
import TradeIcons from "../components/TradeIcons";
import TradeIconRankings from "../components/TradeIconRankings";

const IntroPage: React.FC = () => {
  const initialIcons = ["A", "B", "C", "D"];
  const [icons, setIcons] = useState<(string | null)[]>(initialIcons); // TradeIcons slots
  const [rankedIcons, setRankedIcons] = useState<(string | null)[]>(
    Array(initialIcons.length).fill(null)
  ); // TradeIconRankings slots

  const handleDrop = (
    sourceIndex: number,
    targetIndex: number,
    source: "icons" | "rankedIcons",
    target: "icons" | "rankedIcons"
  ) => {
    if (source === target && sourceIndex === targetIndex) return;

    const sourceSlots = source === "icons" ? icons : rankedIcons;
    const targetSlots = target === "icons" ? icons : rankedIcons;

    // Prevent dropping into a filled slot
    if (targetSlots[targetIndex] !== null) return;

    // Update the source and target slots
    const updatedSourceSlots = [...sourceSlots];
    const updatedTargetSlots = [...targetSlots];
    const draggedIcon = updatedSourceSlots[sourceIndex];

    updatedSourceSlots[sourceIndex] = null;
    updatedTargetSlots[targetIndex] = draggedIcon;

    // Update state
    if (source === "icons") setIcons(updatedSourceSlots);
    else setRankedIcons(updatedSourceSlots);

    if (target === "icons") setIcons(updatedTargetSlots);
    else setRankedIcons(updatedTargetSlots);
  };

  return (
    <div className="app">
      <TradeIcons slots={icons} onDrop={(...args) => handleDrop(...args)} />
      <TradeIconRankings
        slots={rankedIcons}
        onDrop={(...args) => handleDrop(...args)}
      />
    </div>
  );
};

/*return (
    <div className="intro-page">
      <div className="intro-content">
        <h1>Welcome to</h1>
        <img src={tcLogo} alt={"Title"} className="tcLogo" />
        <p>
          Explore a variety of trades and find your passion! This platform is
          designed to introduce you to meaningful career paths in the trades and
          connect you with mentors who can guide you.
        </p>
        <p>Hit get started to see the current trades offered and learn more.</p>
        <NavButton to="/main" label="Get Started" />
      </div>
    </div>
  );*/
export default IntroPage;
