import React, { useState } from "react";
import "../css-files/heroSection.css";

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVideo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="video-wrapper">
      <h2 className="video-title">Experience Our Work</h2>
      <p className="video-subtitle">Watch how we deliver excellence</p>
      <button className="play-button" onClick={toggleVideo}>
        ▶️ Watch Video
      </button>

      {isOpen && (
        <div className="video-modal">
          <div className="video-content">
            <button className="close-button" onClick={toggleVideo}>
              ❌
            </button>
            <video controls autoPlay>
              <source src="/videos/ganesh roa_1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
