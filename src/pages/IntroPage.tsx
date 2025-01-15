import React, { useState } from "react";
import "./IntroPage.css";
import NavButton from "../components/NavButton";
import tcLogo from "../assets/pngs/TC_POS_COLOR_01.png";
import TradeIcons from "../components/TradeIcons";
import TradeIconRankings from "../components/TradeIconRankings";

const IntroPage: React.FC = () => {
  const [icons, setIcons] = useState([
    { letter: "A", isUnlocked: true, isRemoved: false, isPlaceholder: false },
    { letter: "B", isUnlocked: true, isRemoved: false, isPlaceholder: false },
    { letter: "C", isUnlocked: true, isRemoved: false, isPlaceholder: false },
    { letter: "D", isUnlocked: true, isRemoved: false, isPlaceholder: false },
  ]);

  const [rankedIcons, setRankedIcons] = useState<string[]>([]);

  const handleDragStart = (event: React.DragEvent, letter: string) => {
    event.dataTransfer.setData("text/plain", letter);
  };

  const handleDragEnd = (event: React.DragEvent, letter: string) => {
    // Reset icon states when drag ends (if necessary)
  };

  const handleDropInVertical = (event: React.DragEvent) => {
    const letter = event.dataTransfer.getData("text/plain");

    setRankedIcons((prev) => [...prev, letter]);
    setIcons((prev) =>
      prev.map((icon) =>
        icon.letter === letter ? { ...icon, isRemoved: true } : icon
      )
    );
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault(); // Allow drop
  };

  return (
    <div className="app">
      <TradeIcons
        icons={icons}
        setIcons={setIcons} // Pass setIcons to the child component
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      />
      <TradeIconRankings
        rankedIcons={rankedIcons}
        onDrop={handleDropInVertical}
        onDragOver={handleDragOver}
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
