import React from "react";
import "./IntroPage.css";
import NavButton from "../components/NavButton";
import tcLogo from "../assets/pngs/TC_POS_COLOR_01.png";

const IntroPage: React.FC = () => {
  return (
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
  );
};

export default IntroPage;
