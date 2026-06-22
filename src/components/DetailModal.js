"use client";

import React, { useState, useEffect, useCallback } from "react";
import { getEmbedUrl } from "@/lib/utils";

export default function DetailModal({
  video,
  resumeOptions = {},
  onClose,
  onPlay,
  tmdbApiKey,
  onSelectVideo,
  activeProfile
}) {
  const [colorText, setColorText] = useState("6366f1");
  const [colorPicker, setColorPicker] = useState("#6366f1");
  const [progress, setProgress] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [nextEpisode, setNextEpisode] = useState(true);
  const [episodeSelector, setEpisodeSelector] = useState(true);

  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(1);
  const [isLoadingSeasons, setIsLoadingSeasons] = useState(false);
  const [selectedServer, setSelectedServer] = useState("vidsrc_to");

  const [seasonDetails, setSeasonDetails] = useState(null);
  const [isLoadingEpisodes, setIsLoadingEpisodes] = useState(false);
  const [episodeViewMode, setEpisodeViewMode] = useState("detailed");

  // New feature states
  const [trailerKey, setTrailerKey] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [castList, setCastList] = useState([]);
  const [similarTitles, setSimilarTitles] = useState([]);
  const [userRating, setUserRating] = useState(0);
  const [userReview, setUserReview] = useState("");
  const [reviewSaved, setReviewSaved] = useState(false);
  const [activeTab, setActiveTab] = useState("watch");
  const [showFullDesc, setShowFullDesc] = useState(false);

  // Sync color configurations
  useEffect(() => {
    const savedColor = localStorage.getItem("vidking-player-color") || "6366f1";
    setColorText(savedColor);
    setColorPicker("#" + savedColor);
    setProgress(resumeOptions.progress || 0);
  }, [resumeOptions]);

  // Load TV Seasons dynamically
  useEffect(() => {
    if (!video || video.type !== "tv") return;

    // Default fallbacks
    const defaultSeasons = video.seasons || [{ season: 1, name: "Season 1", episodes: 10 }];
    setSeasons(defaultSeasons);

    const initialSeason = resumeOptions.season || 
      (defaultSeasons[0]?.season === 0 && defaultSeasons.length > 1 ? defaultSeasons[1]?.season : defaultSeasons[0]?.season) || 
      1;
    
    setSelectedSeason(initialSeason);

    if (tmdbApiKey) {
      setIsLoadingSeasons(true);
      fetch(`/api/tmdb/tv/${video.id}`, {
        headers: { "x-tmdb-key": tmdbApiKey }
      })
        .then((r) => (r.ok ? r.json() : Promise.reject()))
        .then((data) => {
          if (data.seasons && data.seasons.length > 0) {
            const list = data.seasons.map((s) => ({
              season: s.season_number,
              name: s.name,
              episodes: s.episode_count,
              overview: s.overview
            }));
            setSeasons(list);
            
            const activeSeasonNum = resumeOptions.season || 
              (list[0]?.season === 0 && list.length > 1 ? list[1]?.season : list[0]?.season) || 
              1;
            setSelectedSeason(activeSeasonNum);
          }
        })
        .catch((e) => console.error("Error fetching seasons from proxy:", e))
        .finally(() => setIsLoadingSeasons(false));
    }
  }, [video, tmdbApiKey, resumeOptions]);

  // Fetch season and episode details dynamically
  useEffect(() => {
    if (!video || video.type !== "tv" || !tmdbApiKey) {
      setSeasonDetails(null);
      return;
    }
    
    setIsLoadingEpisodes(true);
    fetch(`/api/tmdb/tv/${video.id}/season/${selectedSeason}`, {
      headers: { "x-tmdb-key": tmdbApiKey }
    })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        setSeasonDetails(data);
      })
      .catch((e) => console.error("Error fetching season details:", e))
      .finally(() => setIsLoadingEpisodes(false));
  }, [video, selectedSeason, tmdbApiKey]);

  // Fetch trailer, cast, and similar titles
  useEffect(() => {
    if (!video || !tmdbApiKey) return;
    const mediaType = video.type === "tv" ? "tv" : "movie";
    const headers = { "x-tmdb-key": tmdbApiKey };

    // Reset local UI states on video transition
    setShowTrailer(false);
    setShowFullDesc(false);
    setActiveTab("watch");
    setTrailerKey(null);
    setCastList([]);
    setSimilarTitles([]);

    // Trailer
    fetch(`/api/tmdb/${mediaType}/${video.id}/videos`, { headers })
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data?.results) {
          const trailer = data.results.find(v => v.type === "Trailer" && v.site === "YouTube")
            || data.results.find(v => v.site === "YouTube");
          if (trailer) setTrailerKey(trailer.key);
        }
      }).catch(() => {});

    // Cast
    fetch(`/api/tmdb/${mediaType}/${video.id}/credits`, { headers })
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data?.cast) setCastList(data.cast.slice(0, 12));
      }).catch(() => {});

    // Similar Titles
    fetch(`/api/tmdb/${mediaType}/${video.id}/similar`, { headers })
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data?.results) setSimilarTitles(data.results.filter(r => r.poster_path).slice(0, 10));
      }).catch(() => {});

    // Load saved rating/review
    const profileId = activeProfile ? activeProfile.id : "global";
    const saved = localStorage.getItem(`review-${profileId}-${video.id}-${video.type}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setUserRating(parsed.rating || 0);
        setUserReview(parsed.review || "");
      } catch(e) {}
    } else {
      setUserRating(0);
      setUserReview("");
    }
    setReviewSaved(false);
  }, [video, tmdbApiKey, activeProfile]);

  const handleSaveReview = useCallback(() => {
    const profileId = activeProfile ? activeProfile.id : "global";
    localStorage.setItem(`review-${profileId}-${video.id}-${video.type}`, JSON.stringify({ rating: userRating, review: userReview, timestamp: Date.now() }));
    setReviewSaved(true);
    setTimeout(() => setReviewSaved(false), 2000);
  }, [video, userRating, userReview, activeProfile]);

  const handleShare = useCallback(async () => {
    const shareData = {
      title: video.title,
      text: `Check out ${video.title} on ADvera!`,
      url: window.location.href
    };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch(e) {}
    } else {
      navigator.clipboard.writeText(`${video.title} - ${window.location.href}`);
    }
  }, [video]);

  const EPISODES_PER_PAGE = 50;
  const [activePage, setActivePage] = useState(0);

  // Reset page when season or seasons change
  useEffect(() => {
    setActivePage(0);
  }, [selectedSeason, seasons]);

  // Adjust activePage to contain selectedEpisode if it's restored from resume options
  useEffect(() => {
    if (selectedEpisode && episodes.length > 0) {
      const epIdx = episodes.indexOf(selectedEpisode);
      if (epIdx !== -1) {
        const pageIdx = Math.floor(epIdx / EPISODES_PER_PAGE);
        setActivePage(pageIdx);
      }
    }
  }, [selectedEpisode, episodes]);

  // Populate episodes when selected season changes
  useEffect(() => {
    const s = seasons.find((x) => x.season == selectedSeason);
    const count = s ? s.episodes : 10;
    const list = [];
    for (let i = 1; i <= count; i++) {
      list.push(i);
    }
    setEpisodes(list);
    
    // Default selected episode
    if (resumeOptions.season == selectedSeason && resumeOptions.episode) {
      setSelectedEpisode(resumeOptions.episode);
    } else {
      setSelectedEpisode(1);
    }
  }, [selectedSeason, seasons, resumeOptions]);

  const handleColorPickerChange = (e) => {
    const hex = e.target.value.substring(1);
    setColorText(hex);
    setColorPicker(e.target.value);
    localStorage.setItem("vidking-player-color", hex);
  };

  const handleColorTextChange = (e) => {
    const val = e.target.value.trim();
    setColorText(val);
    if (/^[0-9a-fA-F]{3,6}$/.test(val)) {
      setColorPicker("#" + (val.length === 3 ? val + val : val));
      localStorage.setItem("vidking-player-color", val);
    }
  };

  const generateEmbedUrl = () => {
    return getEmbedUrl({
      video,
      selectedServer,
      selectedSeason,
      selectedEpisode,
      colorText,
      autoplay,
      nextEpisode,
      episodeSelector,
      progress
    });
  };

  const handleCopy = () => {
    const url = generateEmbedUrl();
    navigator.clipboard.writeText(url).then(() => {
      showCopyToast();
    }).catch(() => {
      // Fallback
      const ta = document.createElement("textarea");
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      showCopyToast();
    });
  };

  const [copied, setCopied] = useState(false);
  const showCopyToast = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!video) return null;

  return (
    <div className="modal-overlay" onClick={(e) => e.target.classList.contains("modal-overlay") && onClose()}>
      <div className="modal-card glass-card">
        {video.backdrop && (
          <div className="modal-backdrop-banner" style={{ backgroundImage: `url(${video.backdrop})` }} />
        )}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">&times;</button>
        <div className="modal-grid">
          <div className="modal-left">
            <div className="modal-poster-wrapper">
              <img src={video.poster} alt={video.title} className="modal-poster-img" />
            </div>
            <div className="modal-meta-info-container">
              <h2 className="modal-title mobile-only-title">{video.title}</h2>
              <div className="modal-quick-info">
                <span className="modal-rating-badge">⭐ {video.rating}</span>
                <span className="modal-year-badge">{video.year}</span>
                <span className="modal-type-badge">{video.type === "tv" ? "TV Show" : "Movie"}</span>
              </div>
              <div className="modal-genres-list">
                {video.genres && video.genres.map((g) => (
                  <span key={g} className="carousel-genre-tag">{g}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="modal-right">
            <h2 className="modal-title desktop-only-title">{video.title}</h2>
            {video.description && (
              <p className="modal-desc">
                {showFullDesc || video.description.length <= 150 
                  ? video.description 
                  : `${video.description.substring(0, 150)}...`}
                {video.description.length > 150 && (
                  <span 
                    onClick={() => setShowFullDesc(!showFullDesc)} 
                    style={{ color: "var(--primary)", cursor: "pointer", fontWeight: "600", marginLeft: "6px" }}
                  >
                    {showFullDesc ? " Show Less" : " Read More"}
                  </span>
                )}
              </p>
            )}

            {/* Premium Tab Navigation */}
            <div className="modal-tabs-nav">
              <button 
                type="button"
                className={`modal-tab-btn ${activeTab === "watch" ? "active" : ""}`}
                onClick={() => setActiveTab("watch")}
              >
                🎬 Play & Servers
              </button>
              <button 
                type="button"
                className={`modal-tab-btn ${activeTab === "details" ? "active" : ""}`}
                onClick={() => setActiveTab("details")}
              >
                ℹ️ Info & Cast
              </button>
              <button 
                type="button"
                className={`modal-tab-btn ${activeTab === "reviews" ? "active" : ""}`}
                onClick={() => setActiveTab("reviews")}
              >
                ⭐ Reviews
              </button>
            </div>

            {/* TAB CONTENT: Watch / Play options */}
            {activeTab === "watch" && (
              <div className="modal-tab-pane">
                <div className="player-config-title">Player Configuration</div>
                <div className="config-grid">
                  
                  <div className="form-group" style={{ marginBottom: "6px" }}>
                    <label className="form-label">Select Playback Server</label>
                    
                    <div className="server-desktop-container">
                      <div className="server-tabs-container">
                        {[
                          { id: "vidsrc_to", name: "VidSrc.to" },
                          { id: "rive", name: "Rive.fm ✨" },
                          { id: "vidsrc_cc", name: "VidSrc.cc" },
                          { id: "vidsrc_me", name: "VidSrc.me" },
                          { id: "embed_su", name: "Embed.su" },
                          { id: "vidsrc_in", name: "VidSrc.in 🇮🇳" },
                          { id: "moviesapi", name: "MoviesAPI" },
                          { id: "vidsrc_net", name: "VidSrc.net" },
                          { id: "embed_rip", name: "Embed.rip" },
                          { id: "smashystream", name: "SmashyStream" },
                          { id: "twoembed", name: "2Embed" },
                          { id: "superembed", name: "SuperEmbed" },
                          { id: "autoembed", name: "AutoEmbed" },
                          { id: "vidsrc_xyz", name: "VidSrc.xyz" },
                          { id: "vidsrc_pro", name: "VidSrc.pro" },
                          { id: "vidking", name: "VidKing" },
                          { id: "tamil", name: "Tamil 🎬" }
                        ].map((srv) => (
                          <button
                            key={srv.id}
                            type="button"
                            className={`server-tab-btn ${selectedServer === srv.id || (srv.id === "vidsrc_xyz" && selectedServer === "vidsrc") || (srv.id === "vidsrc_to" && selectedServer === "vidsrc_to") ? "active" : ""}`}
                            onClick={() => setSelectedServer(srv.id)}
                          >
                            {srv.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="server-mobile-container">
                      <select
                        className="form-input form-select"
                        value={selectedServer}
                        onChange={(e) => setSelectedServer(e.target.value)}
                        style={{ width: "100%", marginTop: "4px" }}
                      >
                        {[
                          { id: "vidsrc_to", name: "VidSrc.to" },
                          { id: "rive", name: "Rive.fm ✨ (No Ads)" },
                          { id: "vidsrc_cc", name: "VidSrc.cc" },
                          { id: "vidsrc_me", name: "VidSrc.me" },
                          { id: "embed_su", name: "Embed.su" },
                          { id: "vidsrc_in", name: "VidSrc.in 🇮🇳" },
                          { id: "moviesapi", name: "MoviesAPI" },
                          { id: "vidsrc_net", name: "VidSrc.net" },
                          { id: "embed_rip", name: "Embed.rip" },
                          { id: "smashystream", name: "SmashyStream" },
                          { id: "twoembed", name: "2Embed" },
                          { id: "superembed", name: "SuperEmbed" },
                          { id: "autoembed", name: "AutoEmbed" },
                          { id: "vidsrc_xyz", name: "VidSrc.xyz" },
                          { id: "vidsrc_pro", name: "VidSrc.pro" },
                          { id: "vidking", name: "VidKing" },
                          { id: "tamil", name: "Tamil 🎬 (AnyEmbed)" }
                        ].map((srv) => (
                          <option key={srv.id} value={srv.id}>
                            {srv.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {selectedServer === "vidking" && (
                    <>
                      <div className="form-group">
                        <label className="form-label">Player Theme Color (Hex)</label>
                        <div className="color-picker-wrapper">
                          <input
                            type="color"
                            value={colorPicker}
                            onChange={handleColorPickerChange}
                            className="color-picker-input"
                          />
                          <input
                            type="text"
                            value={colorText}
                            onChange={handleColorTextChange}
                            placeholder="e50914"
                            className="form-input color-text-input"
                          />
                        </div>
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">Start Time (seconds)</label>
                        <input
                          type="number"
                          value={progress}
                          onChange={(e) => setProgress(parseInt(e.target.value) || 0)}
                          min="0"
                          placeholder="e.g. 120"
                          className="form-input"
                        />
                      </div>
                      
                      <div className="checkbox-row">
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            checked={autoplay}
                            onChange={(e) => setAutoplay(e.target.checked)}
                          /> Autoplay
                        </label>
                      </div>
                    </>
                  )}
                  
                  {video.type === "tv" && (
                    <div className="tv-only-settings">
                      <div className="form-group" style={{ marginBottom: "12px" }}>
                        <label className="form-label">Select Season / Arc</label>
                        <div className="season-tabs-container" style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "6px", flexWrap: "nowrap" }}>
                          {seasons.map((s) => {
                            if (s.season === 0 && seasons.length > 1) return null;
                            const labelName = s.name ? (s.name.toLowerCase().includes("season") ? s.name : `S${s.season}: ${s.name}`) : `Season ${s.season}`;
                            return (
                              <button
                                key={s.season}
                                type="button"
                                className={`season-tab-btn ${selectedSeason === s.season ? "active" : ""}`}
                                onClick={() => setSelectedSeason(s.season)}
                                disabled={isLoadingSeasons}
                                style={{ whiteSpace: "nowrap" }}
                              >
                                {labelName}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="form-group" style={{ marginBottom: "12px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                          <label className="form-label" style={{ marginBottom: 0 }}>Select Episode</label>
                          {tmdbApiKey && seasonDetails?.episodes && (
                            <div style={{ display: "flex", gap: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "4px", padding: "2px" }}>
                              <button
                                type="button"
                                onClick={() => setEpisodeViewMode("detailed")}
                                style={{
                                  fontSize: "0.7rem",
                                  padding: "4px 8px",
                                  borderRadius: "3px",
                                  background: episodeViewMode === "detailed" ? "var(--primary)" : "transparent",
                                  color: episodeViewMode === "detailed" ? "#fff" : "var(--text-secondary)",
                                  fontWeight: "600"
                                }}
                              >
                                Detailed
                              </button>
                              <button
                                type="button"
                                onClick={() => setEpisodeViewMode("compact")}
                                style={{
                                  fontSize: "0.7rem",
                                  padding: "4px 8px",
                                  borderRadius: "3px",
                                  background: episodeViewMode === "compact" ? "var(--primary)" : "transparent",
                                  color: episodeViewMode === "compact" ? "#fff" : "var(--text-secondary)",
                                  fontWeight: "600"
                                }}
                              >
                                Compact
                              </button>
                            </div>
                          )}
                        </div>

                        {(episodeViewMode === "compact" || !seasonDetails?.episodes) && episodes.length > EPISODES_PER_PAGE && (
                          <div className="episode-pages-container">
                            {Array.from({ length: Math.ceil(episodes.length / EPISODES_PER_PAGE) }).map((_, idx) => {
                              const start = idx * EPISODES_PER_PAGE + 1;
                              const end = Math.min((idx + 1) * EPISODES_PER_PAGE, episodes.length);
                              return (
                                <button
                                  key={idx}
                                  type="button"
                                  className={`episode-page-btn ${activePage === idx ? "active" : ""}`}
                                  onClick={() => setActivePage(idx)}
                                >
                                  {start}-{end}
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {episodeViewMode === "detailed" && seasonDetails?.episodes ? (
                          <div className="episodes-detailed-list" style={{ display: "flex", flexDirection: "column", gap: "10px", maxHeight: "220px", overflowY: "auto", paddingRight: "6px" }}>
                            {seasonDetails.episodes.map((ep) => {
                              const isSelected = selectedEpisode === ep.episode_number;
                              const stillUrl = ep.still_path ? `https://image.tmdb.org/t/p/w185${ep.still_path}` : null;
                              return (
                                <div
                                  key={ep.id}
                                  className={`episode-detail-card ${isSelected ? "active" : ""}`}
                                  onClick={() => setSelectedEpisode(ep.episode_number)}
                                  style={{
                                    display: "flex",
                                    gap: "12px",
                                    padding: "8px",
                                    borderRadius: "8px",
                                    background: isSelected ? "rgba(99, 102, 241, 0.12)" : "rgba(255, 255, 255, 0.02)",
                                    border: isSelected ? "1px solid var(--primary)" : "1px solid rgba(255, 255, 255, 0.05)",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease"
                                  }}
                                >
                                  {stillUrl ? (
                                    <img
                                      src={stillUrl}
                                      alt={ep.name}
                                      style={{ width: "80px", height: "48px", objectFit: "cover", borderRadius: "4px", flexShrink: 0 }}
                                      onError={(e) => { e.target.style.display = 'none'; }}
                                    />
                                  ) : (
                                    <div style={{ width: "80px", height: "48px", background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "4px", fontSize: "1rem", flexShrink: 0 }}>🎬</div>
                                  )}
                                  <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2px" }}>
                                      <h4 style={{ fontSize: "0.75rem", fontWeight: "600", color: isSelected ? "var(--primary)" : "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", margin: 0 }}>
                                        Ep {ep.episode_number}: {ep.name}
                                      </h4>
                                      <span style={{ fontSize: "0.6rem", color: "var(--text-muted)", marginLeft: "6px", flexShrink: 0 }}>{ep.air_date || ""}</span>
                                    </div>
                                    <p style={{ fontSize: "0.68rem", color: "var(--text-secondary)", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", margin: 0, lineHeight: "1.3" }}>
                                      {ep.overview || "No description available for this episode."}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="episode-grid">
                            {episodes.slice(activePage * EPISODES_PER_PAGE, (activePage + 1) * EPISODES_PER_PAGE).map((ep) => (
                              <button
                                key={ep}
                                type="button"
                                className={`episode-pill ${selectedEpisode === ep ? "active" : ""}`}
                                onClick={() => setSelectedEpisode(ep)}
                              >
                                {ep}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {selectedServer === "vidking" && (
                        <div className="checkbox-row" style={{ marginTop: "12px" }}>
                          <label className="checkbox-label">
                            <input
                              type="checkbox"
                              checked={nextEpisode}
                              onChange={(e) => setNextEpisode(e.target.checked)}
                            /> Auto Next Episode
                          </label>
                          <label className="checkbox-label">
                            <input
                              type="checkbox"
                              checked={episodeSelector}
                              onChange={(e) => setEpisodeSelector(e.target.checked)}
                            /> Episode Selector
                          </label>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="preview-url-wrapper">
                  <label className="form-label">Embed URL Preview</label>
                  <div className="code-preview-box">
                    <code>{generateEmbedUrl()}</code>
                    <button type="button" className="copy-btn" onClick={handleCopy}>
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: Info & Cast */}
            {activeTab === "details" && (
              <div className="modal-tab-pane">
                {/* Trailer Preview */}
                {trailerKey && (
                  <div className="trailer-section" style={{ marginBottom: "16px" }}>
                    {!showTrailer ? (
                      <button type="button" className="trailer-btn" onClick={() => setShowTrailer(true)}>
                        ▶ Watch Trailer
                      </button>
                    ) : (
                      <iframe
                        className="trailer-embed"
                        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        style={{ width: "100%", aspectRatio: "16/9", borderRadius: "8px", border: "none" }}
                      />
                    )}
                  </div>
                )}

                {/* Cast & Crew */}
                {castList.length > 0 && (
                  <div className="cast-section">
                    <h3>🎭 Cast & Crew</h3>
                    <div className="cast-grid">
                      {castList.map(person => (
                        <div key={person.id} className="cast-card">
                          <img
                            src={person.profile_path ? `https://image.tmdb.org/t/p/w185${person.profile_path}` : "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><rect width='60' height='60' fill='%231a1a2e' rx='30'/><text x='30' y='35' font-size='20' text-anchor='middle' fill='%234b5563'>👤</text></svg>"}
                            alt={person.name}
                          />
                          <div className="cast-name">{person.name}</div>
                          <div className="cast-char">{person.character || person.job || ""}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Similar Titles */}
                {similarTitles.length > 0 && (
                  <div className="similar-titles-section">
                    <h3>🎬 Similar Titles</h3>
                    <div className="similar-titles-scroll">
                      {similarTitles.map(item => (
                        <div key={item.id} className="similar-card" onClick={() => {
                          if (onSelectVideo) {
                            const isTv = video.type === "tv";
                            const mappedGenres = item.genre_ids ? item.genre_ids.map(id => {
                              const TMDB_GENRES = {
                                28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime",
                                99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History",
                                27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Sci-Fi",
                                10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western",
                                10759: "Action & Adventure", 10762: "Kids", 10763: "News", 10764: "Reality",
                                10765: "Sci-Fi & Fantasy", 10766: "Soap", 10767: "Talk", 10768: "War & Politics"
                              };
                              return TMDB_GENRES[id];
                            }).filter(Boolean) : [];
                            
                            if (item.genre_ids?.includes(16) && (item.original_language === "ja" || video.genres?.includes("Anime"))) {
                              if (!mappedGenres.includes("Anime")) mappedGenres.push("Anime");
                            }
                            if (video.genres?.includes("Tamil")) {
                              if (!mappedGenres.includes("Tamil")) mappedGenres.push("Tamil");
                            }

                            const mapped = {
                              id: item.id,
                              title: item.title || item.name,
                              type: isTv ? "tv" : "movie",
                              poster: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : "",
                              backdrop: item.backdrop_path ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}` : "",
                              year: (item.release_date || item.first_air_date || "").substring(0, 4) || "N/A",
                              rating: item.vote_average ? item.vote_average.toFixed(1) : "N/A",
                              genres: mappedGenres.length ? mappedGenres : ["Generic"],
                              description: item.overview || "No description available."
                            };
                            onSelectVideo(mapped);
                          }
                        }}>
                          <img
                            src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                            alt={item.title || item.name}
                          />
                          <div className="similar-title">{item.title || item.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT: Reviews */}
            {activeTab === "reviews" && (
              <div className="modal-tab-pane" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "8px" }}>⭐ Your Rating</h3>
                  <div className="rating-stars">
                    {[1, 2, 3, 4, 5].map(star => (
                      <span
                        key={star}
                        className={`rating-star ${star <= userRating ? "filled" : ""}`}
                        onClick={() => setUserRating(star)}
                        style={{ cursor: "pointer", fontSize: "1.3rem", marginRight: "4px" }}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label className="form-label">Your Review</label>
                  <textarea
                    className="review-input"
                    placeholder="Write a short review..."
                    value={userReview}
                    onChange={(e) => setUserReview(e.target.value)}
                  />
                </div>
                <button type="button" className="review-submit-btn" onClick={handleSaveReview}>
                  {reviewSaved ? "✅ Saved!" : "Save Review"}
                </button>
              </div>
            )}

            {/* Action Buttons Row (Persistent) */}
            <div style={{ display: "flex", gap: "10px", marginTop: "16px", flexWrap: "wrap", borderTop: "1px solid var(--border-glass)", paddingTop: "14px" }}>
              <button
                type="button"
                className="btn btn-primary play-btn"
                onClick={() => onPlay({
                  video,
                  selectedServer,
                  selectedSeason,
                  selectedEpisode,
                  colorText,
                  autoplay,
                  nextEpisode,
                  episodeSelector
                })}
              >
                ▶ Watch Now
              </button>
              <button type="button" className="share-btn" onClick={handleShare}>
                📤 Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
