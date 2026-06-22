"use client";

import React, { useState, useEffect } from "react";

export default function Settings({
  siteId,
  setSiteId,
  tmdbApiKey,
  setTmdbApiKey,
  onSave,
  onQuickPlay,
  theme,
  onToggleTheme,
  profiles = [],
  activeProfile = null,
  onSwitchProfile,
  parentalPin,
  setParentalPin,
  parentalEnabled,
  setParentalEnabled,
  showToastNotification,
  requests = [],
  onRequestTitle
}) {
  const [localSiteId, setLocalSiteId] = useState("");
  const [localApiKey, setLocalApiKey] = useState("");
  const [customId, setCustomId] = useState("");
  const [customMediaType, setCustomMediaType] = useState("movie");

  // Parental PIN setup helper states
  const [settingPinMode, setSettingPinMode] = useState(false);
  const [tempPin, setTempPin] = useState("");
  const [pinConfirmMode, setPinConfirmMode] = useState(false);
  const [firstPin, setFirstPin] = useState("");
  const [verifyDisableMode, setVerifyDisableMode] = useState(false);

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

  const handleToggleParental = () => {
    if (parentalEnabled) {
      setVerifyDisableMode(true);
      setTempPin("");
    } else {
      if (!parentalPin) {
        setSettingPinMode(true);
        setTempPin("");
        setPinConfirmMode(false);
      } else {
        setParentalEnabled(true);
        localStorage.setItem("advera-parental-enabled", "true");
        if (showToastNotification) showToastNotification("🔒 Parental lock enabled!");
      }
    }
  };

  const handleSetupPinKey = (val) => {
    if (tempPin.length >= 4) return;
    if (navigator.vibrate) navigator.vibrate(10);
    const nextPin = tempPin + val;
    setTempPin(nextPin);

    if (nextPin.length === 4) {
      if (!pinConfirmMode) {
        setFirstPin(nextPin);
        setTempPin("");
        setPinConfirmMode(true);
      } else {
        if (nextPin === firstPin) {
          setParentalPin(nextPin);
          setParentalEnabled(true);
          localStorage.setItem("advera-parental-pin", nextPin);
          localStorage.setItem("advera-parental-enabled", "true");
          setSettingPinMode(false);
          setTempPin("");
          setPinConfirmMode(false);
          if (showToastNotification) showToastNotification("🔒 Parental control PIN configured successfully!");
        } else {
          alert("❌ PINs do not match. Please try again.");
          setTempPin("");
          setPinConfirmMode(false);
        }
      }
    }
  };

  const handleVerifyDisablePinKey = (val) => {
    if (tempPin.length >= 4) return;
    if (navigator.vibrate) navigator.vibrate(10);
    const nextPin = tempPin + val;
    setTempPin(nextPin);

    if (nextPin.length === 4) {
      if (nextPin === parentalPin) {
        setParentalEnabled(false);
        localStorage.setItem("advera-parental-enabled", "false");
        setVerifyDisableMode(false);
        setTempPin("");
        if (showToastNotification) showToastNotification("🔓 Parental lock disabled!");
      } else {
        alert("❌ Incorrect PIN!");
        setTempPin("");
      }
    }
  };

  return (
    <section className="tab-section active" style={{ paddingBottom: "60px" }}>
      
      {/* Profiles Card */}
      <div className="settings-card glass-card">
        <h2 className="settings-title">👤 Profiles & Account</h2>
        <p className="settings-description">Switch profiles or manage watch history preferences.</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "15px", flexWrap: "wrap", gap: "15px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "2.5rem" }}>{activeProfile?.avatar}</span>
            <div>
              <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>{activeProfile?.name}</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Active Profile</div>
            </div>
          </div>
          <button className="btn btn-primary" onClick={onSwitchProfile}>
            ⇄ Switch / Manage Profiles
          </button>
        </div>
      </div>

      <div className="settings-card glass-card" style={{ marginTop: "30px" }}>
        <h2 className="settings-title">⚙_ Platform Settings</h2>
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

      {/* Parental Control Card */}
      <div className="settings-card glass-card" style={{ marginTop: "30px" }}>
        <h2 className="settings-title">🔞 Parental Controls</h2>
        <p className="settings-description">Lock Adult & Ullu categories with a secure 4-digit PIN.</p>
        
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "15px 0" }}>
          <div>
            <span style={{ color: parentalEnabled ? "#10b981" : "var(--text-muted)", fontWeight: "bold" }}>
              {parentalEnabled ? "🔒 Restricted Lock is Active" : "🔓 Restricted Lock is Disabled"}
            </span>
            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "4px" }}>
              Requires PIN to browse or watch adult catalog titles.
            </div>
          </div>
          <button className={`btn ${parentalEnabled ? "btn-danger" : "btn-primary"}`} onClick={handleToggleParental} style={{ minWidth: "120px" }}>
            {parentalEnabled ? "Disable" : "Enable"}
          </button>
        </div>

        {/* PIN Keyboard Setup Overlay */}
        {settingPinMode && (
          <div style={{ background: "rgba(255,255,255,0.03)", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)", marginTop: "15px" }}>
            <h4 style={{ textAlign: "center", marginBottom: "8px" }}>
              {pinConfirmMode ? "Confirm 4-Digit PIN" : "Create Parental 4-Digit PIN"}
            </h4>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", margin: "15px 0" }}>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  border: "2px solid var(--primary)",
                  background: tempPin.length > i ? "var(--primary)" : "transparent"
                }} />
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 60px)", gap: "8px", justifyContent: "center", margin: "10px 0" }}>
              {[1,2,3,4,5,6,7,8,9].map(n => (
                <button key={n} className="server-pill-btn" onClick={() => handleSetupPinKey(n)} style={{ height: "45px", fontSize: "1.2rem" }}>{n}</button>
              ))}
              <button className="server-pill-btn" onClick={() => setTempPin("")}>C</button>
              <button className="server-pill-btn" onClick={() => handleSetupPinKey(0)}>0</button>
              <button className="server-pill-btn" onClick={() => setSettingPinMode(false)}>✕</button>
            </div>
          </div>
        )}

        {/* Verify PIN to disable Overlay */}
        {verifyDisableMode && (
          <div style={{ background: "rgba(255,255,255,0.03)", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)", marginTop: "15px" }}>
            <h4 style={{ textAlign: "center", marginBottom: "8px" }}>Enter Current PIN to Disable</h4>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", margin: "15px 0" }}>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  border: "2px solid var(--primary)",
                  background: tempPin.length > i ? "var(--primary)" : "transparent"
                }} />
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 60px)", gap: "8px", justifyContent: "center", margin: "10px 0" }}>
              {[1,2,3,4,5,6,7,8,9].map(n => (
                <button key={n} className="server-pill-btn" onClick={() => handleVerifyDisablePinKey(n)} style={{ height: "45px", fontSize: "1.2rem" }}>{n}</button>
              ))}
              <button className="server-pill-btn" onClick={() => setTempPin("")}>C</button>
              <button className="server-pill-btn" onClick={() => handleVerifyDisablePinKey(0)}>0</button>
              <button className="server-pill-btn" onClick={() => setVerifyDisableMode(false)}>✕</button>
            </div>
          </div>
        )}
      </div>

      {/* Title Requests Card */}
      <div className="settings-card glass-card" style={{ marginTop: "30px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
          <div>
            <h2 className="settings-title">📢 Title Requests</h2>
            <p className="settings-description">Can't find a title? Ask us to index it for you.</p>
          </div>
          <button className="btn btn-primary" onClick={onRequestTitle}>
            Request a Title
          </button>
        </div>

        {requests.length > 0 ? (
          <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {requests.map(r => (
              <div key={r.id} style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "8px",
                padding: "12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <div>
                  <div style={{ fontWeight: "bold" }}>{r.name} ({r.year || "N/A"})</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px" }}>
                    Type: {r.type.toUpperCase()} · Submitted: {r.date}
                  </div>
                </div>
                <span style={{
                  fontSize: "0.75rem",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  background: r.status === "Available" ? "rgba(16, 185, 129, 0.15)" : "rgba(245, 158, 11, 0.15)",
                  color: r.status === "Available" ? "#34d399" : "#fbbf24",
                  border: r.status === "Available" ? "1px solid rgba(16,185,129,0.3)" : "1px solid rgba(245,158,11,0.3)"
                }}>
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "15px", textAlign: "center" }}>
            No titles requested yet.
          </p>
        )}
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

      {/* Appearance Section */}
      <div className="settings-card glass-card" style={{ marginTop: "30px" }}>
        <h2 className="settings-title">🎨 Appearance</h2>
        <p className="settings-description">Customize the look and feel of ADvera.</p>
        
        <div className="settings-form">
          <div className="form-group">
            <label className="form-label">Theme</label>
            <button className="theme-toggle-btn" onClick={onToggleTheme}>
              {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"} — Click to Switch
            </button>
          </div>
        </div>
      </div>

      {/* Data Management Section */}
      <div className="settings-card glass-card" style={{ marginTop: "30px" }}>
        <h2 className="settings-title">🗃️ Data Management</h2>
        <p className="settings-description">Manage your local data: watchlist, watch history, and poster cache.</p>
        
        <div className="settings-form">
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button className="btn btn-primary" style={{ background: "rgba(239, 68, 68, 0.15)", color: "#f87171", border: "1px solid rgba(239,68,68,0.3)" }} onClick={() => {
              if (activeProfile) {
                localStorage.removeItem(`advera-watchlist-${activeProfile.id}`);
                window.location.reload();
              }
            }}>
              🗑️ Clear Watchlist
            </button>
            <button className="btn btn-primary" style={{ background: "rgba(239, 68, 68, 0.15)", color: "#f87171", border: "1px solid rgba(239,68,68,0.3)" }} onClick={() => {
              if (activeProfile) {
                for (let i = localStorage.length - 1; i >= 0; i--) {
                  const key = localStorage.key(i);
                  if (key && key.startsWith(`progress-${activeProfile.id}-`)) localStorage.removeItem(key);
                }
                window.location.reload();
              }
            }}>
              🗑️ Clear Watch History
            </button>
            <button className="btn btn-primary" style={{ background: "rgba(239, 68, 68, 0.15)", color: "#f87171", border: "1px solid rgba(239,68,68,0.3)" }} onClick={() => {
              for (let i = localStorage.length - 1; i >= 0; i--) {
                const key = localStorage.key(i);
                if (key && key.startsWith("poster-cache-")) localStorage.removeItem(key);
              }
              alert("✅ Poster cache cleared!");
            }}>
              🗑️ Clear Poster Cache
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
