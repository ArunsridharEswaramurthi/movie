"use client";

import React, { useState } from "react";

export default function VideoCard({ video, onSelectVideo }) {
  const [imageError, setImageError] = useState(false);

  const typeClass = video.type === "tv" ? "tv" : "movie";
  const typeLabel = video.type === "tv" ? "TV" : "Movie";

  return (
    <div
      className="video-card"
      onClick={() => onSelectVideo(video)}
    >
      <div className="card-img-container">
        {imageError || !video.poster ? (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg,#1a1a2e,#0d0d1a)",
              color: "#4b5563",
              fontSize: "2.2rem"
            }}
          >
            🎬
          </div>
        ) : (
          <img
            src={video.poster}
            alt={video.title}
            loading="lazy"
            onError={() => setImageError(true)}
          />
        )}
        <div className="card-play-overlay">
          <div className="play-icon-glow">▶</div>
        </div>
      </div>
      <div className="card-info">
        <div className="card-meta">
          <span className="card-rating">⭐ {video.rating}</span>
          <span className={`card-type-badge ${typeClass}`}>{typeLabel}</span>
          <span className="card-year">{video.year}</span>
        </div>
        <h3 className="card-title">{video.title}</h3>
      </div>
    </div>
  );
}
