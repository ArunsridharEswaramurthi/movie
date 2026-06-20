"use client";

import React, { useState, useEffect } from "react";

export default function VideoCard({ video, onSelectVideo }) {
  const [imageError, setImageError] = useState(false);
  const [fetchedPoster, setFetchedPoster] = useState(null);

  useEffect(() => {
    // If the local poster is missing or failed to load, pull one from TMDb online
    if ((!video.poster || imageError) && !fetchedPoster) {
      const tmdbKey = localStorage.getItem("vidking-tmdb-key") || "44531997758615c4af0f1d7724b5819d";
      if (tmdbKey && video.title) {
        const queryUrl = `/api/tmdb/search/multi?query=${encodeURIComponent(video.title)}&include_adult=true`;
        fetch(queryUrl, {
          headers: { "x-tmdb-key": tmdbKey }
        })
          .then((res) => (res.ok ? res.json() : null))
          .then((data) => {
            if (data?.results && data.results.length > 0) {
              // Try to find an exact title match first, fallback to first result
              const matched = data.results.find(
                (item) => (item.title || item.name || "").toLowerCase() === video.title.toLowerCase()
              ) || data.results[0];

              if (matched?.poster_path) {
                setFetchedPoster(`https://image.tmdb.org/t/p/w500${matched.poster_path}`);
                setImageError(false);
              }
            }
          })
          .catch(() => {});
      }
    }
  }, [video.poster, video.title, imageError, fetchedPoster]);

  const typeClass = video.type === "tv" ? "tv" : "movie";
  const typeLabel = video.type === "tv" ? "TV" : "Movie";
  const displayPoster = fetchedPoster || video.poster;

  return (
    <div
      className="video-card"
      onClick={() => onSelectVideo(video)}
    >
      <div className="card-img-container">
        {imageError || !displayPoster ? (
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
            src={displayPoster}
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
