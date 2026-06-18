"use client";

import React, { useState, useEffect } from "react";

export default function DetailModal({
  video,
  resumeOptions = {},
  onClose,
  onPlay,
  tmdbApiKey
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
  const [selectedServer, setSelectedServer] = useState("vidking");

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
    const defaultSeasons = video.seasons || [{ season: 1, episodes: 10 }];
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
              episodes: s.episode_count
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

  // Generate URL preview
  const generateEmbedUrl = () => {
    if (!video) return "";
    let url = "";
    
    if (selectedServer === "vidking") {
      const p = [];
      if (colorText.trim()) p.push(`color=${colorText.trim()}`);
      if (autoplay) p.push("autoPlay=true");
      if (progress > 0) p.push(`progress=${progress}`);

      if (video.type === "tv") {
        url = `https://www.vidking.net/embed/tv/${video.id}/${selectedSeason}/${selectedEpisode}`;
        if (nextEpisode) p.push("nextEpisode=true");
        if (episodeSelector) p.push("episodeSelector=true");
      } else {
        url = `https://www.vidking.net/embed/movie/${video.id}`;
      }
      if (p.length) url += "?" + p.join("&");
    } else if (selectedServer === "vidsrc") {
      if (video.type === "tv") {
        url = `https://vidsrc.xyz/embed/tv/${video.id}/${selectedSeason}/${selectedEpisode}`;
      } else {
        url = `https://vidsrc.xyz/embed/movie/${video.id}`;
      }
    } else if (selectedServer === "superembed") {
      if (video.type === "tv") {
        url = `https://multiembed.to/embed.php?tmdb=1&id=${video.id}&s=${selectedSeason}&e=${selectedEpisode}`;
      } else {
        url = `https://multiembed.to/embed.php?tmdb=1&id=${video.id}`;
      }
    }
    
    return url;
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
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">&times;</button>
        <div className="modal-grid">
          <div className="modal-left">
            <div className="modal-poster-wrapper">
              <img src={video.poster} alt={video.title} className="modal-poster-img" />
            </div>
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
          <div className="modal-right">
            <h2 className="modal-title">{video.title}</h2>
            <p className="modal-desc">{video.description}</p>
                       <div className="player-config-title">Player Configuration</div>
            <div className="config-grid">
              
              <div className="form-group" style={{ marginBottom: "6px" }}>
                <label className="form-label">Select Playback Server</label>
                <div className="server-tabs-container">
                  <button
                    type="button"
                    className={`server-tab-btn ${selectedServer === "vidking" ? "active" : ""}`}
                    onClick={() => setSelectedServer("vidking")}
                  >
                    VidKing (Primary)
                  </button>
                  <button
                    type="button"
                    className={`server-tab-btn ${selectedServer === "vidsrc" ? "active" : ""}`}
                    onClick={() => setSelectedServer("vidsrc")}
                  >
                    Vidsrc (Backup)
                  </button>
                  <button
                    type="button"
                    className={`server-tab-btn ${selectedServer === "superembed" ? "active" : ""}`}
                    onClick={() => setSelectedServer("superembed")}
                  >
                    SuperEmbed (Alt)
                  </button>
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
                    <label className="form-label">Select Season</label>
                    <div className="season-tabs-container">
                      {seasons.map((s) => {
                        if (s.season === 0 && seasons.length > 1) return null;
                        return (
                          <button
                            key={s.season}
                            type="button"
                            className={`season-tab-btn ${selectedSeason === s.season ? "active" : ""}`}
                            onClick={() => setSelectedSeason(s.season)}
                            disabled={isLoadingSeasons}
                          >
                            Season {s.season}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: "12px" }}>
                    <label className="form-label">Select Episode</label>
                    {episodes.length > EPISODES_PER_PAGE && (
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
                <button className="copy-btn" onClick={handleCopy}>
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
            
            <button
              className="btn btn-primary play-btn"
              onClick={() => onPlay(video.title, generateEmbedUrl())}
            >
              ▶ Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
