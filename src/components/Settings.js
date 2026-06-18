"use client";

import React, { useState, useEffect } from "react";

export default function Settings({
  siteId,
  setSiteId,
  tmdbApiKey,
  setTmdbApiKey,
  onSave,
  onQuickPlay
}) {
  const [localSiteId, setLocalSiteId] = useState("");
  const [localApiKey, setLocalApiKey] = useState("");
  const [customId, setCustomId] = useState("");
  const [customMediaType, setCustomMediaType] = useState("movie");

  useEffect(() => {
    setLocalSiteId(siteId);
    setLocalApiKey(tmdbApiKey);
  }, [siteId, tmdbApiKey]);

  const handleSave = () => {
    onSave(localSiteId, localApiKey);
  };

  const handleQuickPlay = () => {
    const cleanId = customId.trim();
    if (!cleanId || isNaN(cleanId)) {
      alert("❌ Please enter a valid numerical TMDB ID");
      return;
    }
    onQuickPlay(parseInt(cleanId), customMediaType);
  };

  return (
    <section className="tab-section active">
      <div className="settings-card glass-card">
        <h2 className="settings-title">⚙️ Platform Settings</h2>
        <p className="settings-description">Configure your streaming preferences and connection details.</p>
        
        <div className="settings-form">
          <div className="form-group">
            <label htmlFor="site-id-input" className="form-label">Vidking Site ID</label>
            <input
              type="text"
              id="site-id-input"
              placeholder="Enter your Vidking Site ID"
              className="form-input"
              value={localSiteId}
              onChange={(e) => setLocalSiteId(e.target.value)}
            />
            <span className="form-help">Enter the unique identifier associated with your Vidking API subscription.</span>
          </div>

          <div className="form-group">
            <label htmlFor="tmdb-api-key-input" className="form-label">TMDb API Key (Optional)</label>
            <input
              type="password"
              id="tmdb-api-key-input"
              placeholder="Enter your TMDb API Key (v3)"
              className="form-input"
              value={localApiKey}
              onChange={(e) => setLocalApiKey(e.target.value)}
            />
            <span className="form-help">
              Add your TMDb API key to search and browse millions of movies, TV shows, and anime. Get a free key at{" "}
              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--primary)", textDecoration: "underline" }}
              >
                themoviedb.org
              </a>.
            </span>
          </div>

          <button className="btn btn-primary" onClick={handleSave}>
            Save Configurations
          </button>
        </div>
      </div>

      <div className="settings-card glass-card" style={{ marginTop: "30px" }}>
        <h2 className="settings-title">🚀 Instant Play by TMDB ID</h2>
        <p className="settings-description">Stream any anime movie or TV show directly by entering its TMDB ID.</p>
        
        <div className="settings-form">
          <div className="form-row">
            <div className="form-group" style={{ flex: 1 }}>
              <label htmlFor="custom-tmdb-id" className="form-label">TMDB ID</label>
              <input
                type="text"
                id="custom-tmdb-id"
                placeholder="e.g. 37854"
                className="form-input"
                value={customId}
                onChange={(e) => setCustomId(e.target.value)}
              />
            </div>
            <div className="form-group" style={{ width: "140px" }}>
              <label htmlFor="custom-media-type" className="form-label">Type</label>
              <select
                id="custom-media-type"
                className="form-input form-select"
                value={customMediaType}
                onChange={(e) => setCustomMediaType(e.target.value)}
              >
                <option value="movie">Movie</option>
                <option value="tv">TV Show</option>
              </select>
            </div>
          </div>

          <button className="btn btn-primary" onClick={handleQuickPlay}>
            ▶ Load and Play
          </button>
        </div>
      </div>
    </section>
  );
}
