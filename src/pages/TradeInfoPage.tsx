import "../App.css";
import VideoPlayer from "../components/VideoPlayer.tsx";
import HVACVideo1 from "../assets/videos/WhatIsHVAC.mp4";
import HVACImg from "../assets/images/HVAC.jpg";

const TradeInfoPage: React.FC = () => {
  return <VideoPlayer src={HVACVideo1} poster={HVACImg} />;
};

export default TradeInfoPage;
