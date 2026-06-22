"use client";

import React, { useState, useEffect, useRef } from "react";

export default function VideoCard({ video, onSelectVideo, isWatchlisted, onToggleWatchlist }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [fetchedPoster, setFetchedPoster] = useState(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // Check localStorage cache first
    const cachedPoster = localStorage.getItem(`poster-cache-${video.id}-${video.type}`);
    if (cachedPoster) {
      setFetchedPoster(cachedPoster);
      return;
    }

    // If the local poster is missing or failed to load, pull one from TMDb online
    if ((!video.poster || imageError) && !fetchedPoster) {
      const tmdbKey = localStorage.getItem("vidking-tmdb-key") || "44531997758615c4af0f1d7724b5819d";
      if (tmdbKey && video.title) {
        const queryUrl = `/api/tmdb/search/multi?query=${encodeURIComponent(video.title)}&include_adult=true`;
        fetch(queryUrl, { headers: { "x-tmdb-key": tmdbKey } })
          .then((res) => (res.ok ? res.json() : null))
          .then((data) => {
            if (data?.results && data.results.length > 0) {
              const matched = data.results.find(
                (item) => (item.title || item.name || "").toLowerCase() === video.title.toLowerCase()
              ) || data.results[0];
              if (matched?.poster_path) {
                const posterUrl = `https://image.tmdb.org/t/p/w500${matched.poster_path}`;
                setFetchedPoster(posterUrl);
                setImageError(false);
                // Cache the fetched poster for future loads
                localStorage.setItem(`poster-cache-${video.id}-${video.type}`, posterUrl);
              }
            }
          })
          .catch(() => {});
      }
    }
  }, [video.poster, video.title, video.id, video.type, imageError, fetchedPoster]);

  const typeClass = video.type === "tv" ? "tv" : "movie";
  const typeLabel = video.type === "tv" ? "TV" : "Movie";
  const displayPoster = fetchedPoster || video.poster;

  const handleWatchlistClick = (e) => {
    e.stopPropagation();
    if (onToggleWatchlist) {
      // Haptic feedback
      if (navigator.vibrate) navigator.vibrate(30);
      onToggleWatchlist(video);
    }
  };

  return (
    <div className="video-card" ref={cardRef} onClick={() => onSelectVideo(video)}>
      <div className="card-img-container">
        {/* Skeleton shimmer while loading */}
        {!imageLoaded && displayPoster && (
          <div className="skeleton-shimmer" />
        )}

        {(imageError && !fetchedPoster) || !displayPoster ? (
          <div className="card-fallback-placeholder">
            🎬
          </div>
        ) : (
          <img
            src={displayPoster}
            alt={video.title}
            loading="lazy"
            className={`card-poster-img ${imageLoaded ? "loaded" : "loading"}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => { setImageError(true); setImageLoaded(true); }}
          />
        )}
        <div className="card-play-overlay">
          <div className="play-icon-glow">▶</div>
        </div>

        {/* Watchlist Heart Button */}
        {onToggleWatchlist && (
          <button
            className={`card-watchlist-btn ${isWatchlisted ? "active" : ""}`}
            onClick={handleWatchlistClick}
            aria-label={isWatchlisted ? "Remove from watchlist" : "Add to watchlist"}
          >
            {isWatchlisted ? "❤️" : "🤍"}
          </button>
        )}
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
