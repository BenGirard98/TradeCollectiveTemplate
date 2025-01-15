import React from "react";
import "./InfoSection.css";
import "./InfoSectionImage.css";
import HVACImg from "../assets/images/HVACCareerPathways.jpg";

interface ImageProps {
  title?: string;
  imgSrc: string;
}

const InfoSectionImage: React.FC<ImageProps> = (title, imgSrc) => {
  return (
    <div className="info-section-container">
      {title ? <h2>Just a Normal String</h2> : <></>}
      <img className="image" src={HVACImg} alt="An example image" />
    </div>
  );
};

export default InfoSectionImage;
