import React from "react";
import "./VideoPlayer.css";
import "./InfoSection.css";

interface VideoPlayerProps {
  src: string;
  title?: string;
  poster?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title, poster }) => {
  return (
    <div className="info-section-container">
      {title ? <h2>{title}</h2> : <></>}
      <video controls poster={poster} className="video-element">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
