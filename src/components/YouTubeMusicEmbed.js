// src/components/YouTubeMusicEmbed.js
import React from 'react';

const YouTubeMusicEmbed = ({ playlistId }) => {
  const embedUrl = `https://www.youtube.com/embed/videoseries?list=${playlistId}`;

  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        src={embedUrl}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Music Playlist"
        width="100%"
        height="450"
      ></iframe>
    </div>
  );
};

export default YouTubeMusicEmbed;
