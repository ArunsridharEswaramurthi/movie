"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, Home, Compass, Settings as SettingsIcon, Dices } from "lucide-react";

export default function Navbar({
  currentTab,
  setCurrentTab,
  searchQuery,
  setSearchQuery,
  searchResults,
  setSearchResults,
  tmdbApiKey,
  onSelectVideo,
  onSurpriseMe
}) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const searchBoxRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchInput = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim()) {
      setDropdownVisible(true);
    } else {
      setDropdownVisible(false);
      setSearchResults([]);
    }
  };

  const highlightMatch = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={i} style={{ color: "var(--primary)", fontWeight: "700" }}>{part}</span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <>
      <header className="app-navbar" id="app-navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <div className="brand" onClick={() => setCurrentTab("dashboard")}>
              <span className="brand-icon">🎬</span>
              <span className="brand-text">Vidking<span className="brand-accent">Anime</span></span>
            </div>
            <nav className="navbar-nav">
              <a
                href="#"
                className={`nav-item ${currentTab === "dashboard" ? "active" : ""}`}
                onClick={(e) => { e.preventDefault(); setCurrentTab("dashboard"); }}
              >
                Home
              </a>
              <a
                href="#"
                className={`nav-item ${currentTab === "videos" ? "active" : ""}`}
                onClick={(e) => { e.preventDefault(); setCurrentTab("videos"); }}
              >
                Explore
              </a>
              <a
                href="#"
                className={`nav-item ${currentTab === "settings" ? "active" : ""}`}
                onClick={(e) => { e.preventDefault(); setCurrentTab("settings"); }}
              >
                Settings
              </a>
              <button
                className="nav-item surprise-me-btn"
                onClick={(e) => { e.preventDefault(); onSurpriseMe(); }}
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--accent)", fontWeight: "700" }}
              >
                <span>🎲</span> Surprise Me
              </button>
            </nav>
          </div>
          
          <div className="navbar-right">
            <div className="search-box" ref={searchBoxRef}>
              <Search className="search-svg-icon" />
              <input
                type="text"
                id="search-input"
                className="search-input"
                placeholder="Search One Piece & Demon Slayer..."
                value={searchQuery}
                onChange={handleSearchInput}
                onFocus={() => searchQuery.trim() && setDropdownVisible(true)}
                autoComplete="off"
              />
              {dropdownVisible && (searchQuery.trim().length > 0) && (
                <div className="search-results-dropdown" id="search-results-dropdown">
                  {searchResults.length === 0 ? (
                    <div className="search-no-results">No matches found</div>
                  ) : (
                    searchResults.map((v) => {
                      const typeLabel = v.type === "tv" ? "TV" : "Movie";
                      return (
                        <div
                          key={`${v.type}-${v.id}`}
                          className="search-result-item"
                          onClick={() => {
                            setDropdownVisible(false);
                            setSearchQuery("");
                            onSelectVideo(v);
                          }}
                        >
                          <img
                            src={v.poster || "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='56'><rect width='40' height='56' fill='%231a1a2e'/><text x='20' y='32' font-size='16' text-anchor='middle'>🎬</text></svg>"}
                            alt={v.title}
                          />
                          <div className="search-result-info">
                            <div className="search-result-title">
                              {highlightMatch(v.title, searchQuery)}
                            </div>
                            <div className="search-result-meta">
                              {typeLabel} · {v.year} · ⭐ {v.rating}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                  {!tmdbApiKey && (
                    <div className="search-dropdown-tip">
                      🔑 Set a <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setDropdownVisible(false);
                          setCurrentTab("settings");
                        }}
                      >
                        TMDb API Key
                      </a> in Settings to search millions of titles.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Tab Navigation */}
      <div className="mobile-bottom-nav">
        <button
          className={`mobile-nav-item ${currentTab === "dashboard" ? "active" : ""}`}
          onClick={() => setCurrentTab("dashboard")}
        >
          <Home className="mobile-nav-icon" />
          <span className="mobile-nav-label">Home</span>
        </button>
        <button
          className={`mobile-nav-item ${currentTab === "videos" ? "active" : ""}`}
          onClick={() => setCurrentTab("videos")}
        >
          <Compass className="mobile-nav-icon" />
          <span className="mobile-nav-label">Explore</span>
        </button>
        <button
          className="mobile-nav-item surprise"
          onClick={() => onSurpriseMe()}
        >
          <Dices className="mobile-nav-icon" />
          <span className="mobile-nav-label">Surprise</span>
        </button>
        <button
          className={`mobile-nav-item ${currentTab === "settings" ? "active" : ""}`}
          onClick={() => setCurrentTab("settings")}
        >
          <SettingsIcon className="mobile-nav-icon" />
          <span className="mobile-nav-label">Settings</span>
        </button>
      </div>
    </>
  );
}
