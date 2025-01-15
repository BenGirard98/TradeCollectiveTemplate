import React from "react";
import "./VideoPlayer.css"; // Import the new CSS file for styling

interface VideoPlayerProps {
  src: string;
  text?: string;
  poster?: string;
  width?: string;
  height?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  text,
  poster,
  width = "640px",
  height = "360px",
}) => {
  return (
    <div className="video-player-container">
      {text ? <h2>{text}</h2> : <></>}
      <video
        controls
        poster={poster}
        className="video-element"
        style={{ width, height }} // Apply dynamic dimensions directly
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
