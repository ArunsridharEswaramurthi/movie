"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import VideoCard from "@/components/VideoCard";
import DetailModal from "@/components/DetailModal";
import Settings from "@/components/Settings";
import { ANIME_CATALOG, getGenresFromIds } from "@/lib/constants";

export default function Home() {
  const [currentTab, setCurrentTab] = useState("dashboard");
  const [siteId, setSiteId] = useState("12345");
  const [tmdbApiKey, setTmdbApiKey] = useState("44531997758615c4af0f1d7724b5819d");
  
  const [videos, setVideos] = useState(ANIME_CATALOG);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchDebounce, setSearchDebounce] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("All");

  const [activeVideo, setActiveVideo] = useState(null);
  const [resumeOptions, setResumeOptions] = useState({});
  const [playingVideo, setPlayingVideo] = useState(null); // { title, url, themeColor }
  
  const [continueWatching, setContinueWatching] = useState([]);
  const [toast, setToast] = useState("");
  
  // Dynamic global catalog shelving states
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTVShows, setTrendingTVShows] = useState([]);
  const [trendingAnime, setTrendingAnime] = useState([]);
  
  const playerSectionRef = useRef(null);

  // Initialize configurations from local storage
  useEffect(() => {
    const savedSiteId = localStorage.getItem("vidking-site-id") || "12345";
    const savedApiKey = localStorage.getItem("vidking-tmdb-key") || "44531997758615c4af0f1d7724b5819d";
    setSiteId(savedSiteId);
    setTmdbApiKey(savedApiKey);
    loadContinueWatching();
  }, []);

  // Set up message listener for watch progress events from iframe
  useEffect(() => {
    function handleMessage(event) {
      try {
        const payload = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (payload?.type === "PLAYER_EVENT" && payload.data) {
          const progressData = {
            ...payload.data,
            mediaType: activeVideo?.type || payload.data.mediaType || "movie",
            timestamp: Date.now()
          };
          localStorage.setItem(`progress-${payload.data.id}`, JSON.stringify(progressData));
          loadContinueWatching();
        }
      } catch (e) {
        // Non-JSON message, ignore
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [activeVideo]);

  // Load Continue Watching lists from local storage
  const loadContinueWatching = () => {
    const history = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("progress-")) {
        try {
          const d = JSON.parse(localStorage.getItem(key));
          if (d && d.id) history.push(d);
        } catch (e) {}
      }
    }
    history.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    setContinueWatching(history);
  };

  // Fetch dynamic catalog shelves if TMDb API key is set
  useEffect(() => {
    if (!tmdbApiKey) {
      setVideos(ANIME_CATALOG);
      setTrendingMovies([]);
      setTrendingTVShows([]);
      setTrendingAnime([]);
      return;
    }

    const fetchDynamicCatalog = async () => {
      try {
        const headers = { "x-tmdb-key": tmdbApiKey };
        
        // Fetch One Piece Movies and Demon Slayer Movies
        const opMoviesPromise = fetch("/api/tmdb/search/movie?query=One Piece", { headers }).then(r => r.ok ? r.json() : null);
        const dsMoviesPromise = fetch("/api/tmdb/search/movie?query=Demon Slayer", { headers }).then(r => r.ok ? r.json() : null);
        
        // Fetch updated details for One Piece and Demon Slayer series
        const opTvPromise = fetch("/api/tmdb/tv/37854", { headers }).then(r => r.ok ? r.json() : null);
        const dsTvPromise = fetch("/api/tmdb/tv/85937", { headers }).then(r => r.ok ? r.json() : null);

        // Fetch Global Trending/Popular Shelves
        const trendingMoviesPromise = fetch("/api/tmdb/trending/movie/week", { headers }).then(r => r.ok ? r.json() : null);
        const trendingTVShowsPromise = fetch("/api/tmdb/trending/tv/week", { headers }).then(r => r.ok ? r.json() : null);
        const trendingAnimePromise = fetch("/api/tmdb/discover/tv?with_genres=16&with_original_language=ja&sort_by=popularity.desc", { headers }).then(r => r.ok ? r.json() : null);

        const [
          opMoviesData,
          dsMoviesData,
          opTvData,
          dsTvData,
          trendingMoviesData,
          trendingTVShowsData,
          trendingAnimeData
        ] = await Promise.all([
          opMoviesPromise,
          dsMoviesPromise,
          opTvPromise,
          dsTvPromise,
          trendingMoviesPromise,
          trendingTVShowsPromise,
          trendingAnimePromise
        ]);

        let list = [...ANIME_CATALOG];

        // Helper to upsert a movie or show to our catalog
        const upsertItem = (newItem) => {
          const index = list.findIndex(item => item.id === newItem.id && item.type === newItem.type);
          if (index !== -1) {
            list[index] = { ...list[index], ...newItem };
          } else {
            list.push(newItem);
          }
        };

        const mapTmdbs = (item, mediaType) => ({
          id: item.id,
          title: item.title || item.name,
          type: mediaType || item.media_type || (item.title ? "movie" : "tv"),
          poster: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : "",
          backdrop: item.backdrop_path ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}` : "",
          year: (item.release_date || item.first_air_date || "").substring(0, 4) || "N/A",
          rating: item.vote_average ? item.vote_average.toFixed(1) : "N/A",
          genres: getGenresFromIds(item.genre_ids, item.origin_country || []),
          description: item.overview || "No description available."
        });

        if (opTvData) {
          upsertItem({
            id: opTvData.id,
            title: opTvData.name,
            type: "tv",
            poster: opTvData.poster_path ? `https://image.tmdb.org/t/p/w500${opTvData.poster_path}` : list[0].poster,
            backdrop: opTvData.backdrop_path ? `https://image.tmdb.org/t/p/w780${opTvData.backdrop_path}` : list[0].backdrop,
            year: (opTvData.first_air_date || "").substring(0, 4) || "1999",
            rating: opTvData.vote_average ? opTvData.vote_average.toFixed(1) : "8.7",
            genres: opTvData.genres ? opTvData.genres.map(g => g.name) : ["Anime", "Action"],
            description: opTvData.overview || opTvData.description
          });
        }

        if (dsTvData) {
          upsertItem({
            id: dsTvData.id,
            title: dsTvData.name,
            type: "tv",
            poster: dsTvData.poster_path ? `https://image.tmdb.org/t/p/w500${dsTvData.poster_path}` : list[4].poster,
            backdrop: dsTvData.backdrop_path ? `https://image.tmdb.org/t/p/w780${dsTvData.backdrop_path}` : list[4].backdrop,
            year: (dsTvData.first_air_date || "").substring(0, 4) || "2019",
            rating: dsTvData.vote_average ? dsTvData.vote_average.toFixed(1) : "8.7",
            genres: dsTvData.genres ? dsTvData.genres.map(g => g.name) : ["Anime", "Action"],
            description: dsTvData.overview || dsTvData.description
          });
        }

        if (opMoviesData?.results) {
          opMoviesData.results
            .filter(m => m.title.toLowerCase().includes("one piece"))
            .forEach(m => upsertItem(mapTmdbs(m, "movie")));
        }

        if (dsMoviesData?.results) {
          dsMoviesData.results
            .filter(m => m.title.toLowerCase().includes("demon slayer") || m.title.toLowerCase().includes("kimetsu"))
            .forEach(m => upsertItem(mapTmdbs(m, "movie")));
        }

        // Map and save dynamic shelves
        if (trendingMoviesData?.results) {
          const mappedMovies = trendingMoviesData.results.map(m => mapTmdbs(m, "movie"));
          setTrendingMovies(mappedMovies);
          mappedMovies.forEach(m => upsertItem(m));
        }

        if (trendingTVShowsData?.results) {
          const mappedTV = trendingTVShowsData.results.map(t => mapTmdbs(t, "tv"));
          setTrendingTVShows(mappedTV);
          mappedTV.forEach(t => upsertItem(t));
        }

        if (trendingAnimeData?.results) {
          const mappedAnime = trendingAnimeData.results.map(a => mapTmdbs(a, "tv"));
          setTrendingAnime(mappedAnime);
          mappedAnime.forEach(a => upsertItem(a));
        }

        setVideos(list);
      } catch (e) {
        console.error("Error fetching dynamic layout:", e);
      }
    };

    fetchDynamicCatalog();
  }, [tmdbApiKey]);

  // Debounced search trigger queries TMDb if key is configured
  useEffect(() => {
    if (searchDebounce) clearTimeout(searchDebounce);
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const timer = setTimeout(() => {
      // Auto redirect search query to Explore tab
      setCurrentTab("videos");
      setCurrentCategory("All");

      // Local matching first
      const localResults = videos.filter((v) =>
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (tmdbApiKey) {
        fetch(`/api/tmdb/search/multi?query=${encodeURIComponent(searchQuery)}&include_adult=false`, {
          headers: { "x-tmdb-key": tmdbApiKey }
        })
          .then((r) => (r.ok ? r.json() : null))
          .then((data) => {
            if (data?.results) {
              const tmdbResults = data.results
                .filter((item) => item.media_type === "movie" || item.media_type === "tv")
                .map((item) => ({
                  id: item.id,
                  title: item.title || item.name,
                  type: item.media_type,
                  poster: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : "",
                  backdrop: item.backdrop_path ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}` : "",
                  year: (item.release_date || item.first_air_date || "").substring(0, 4) || "N/A",
                  rating: item.vote_average ? item.vote_average.toFixed(1) : "N/A",
                  genres: getGenresFromIds(item.genre_ids, item.origin_country),
                  description: item.overview || "No description available."
                }));
              
              const merged = [...localResults];
              tmdbResults.forEach((t) => {
                if (!merged.some((l) => l.id === t.id && l.type === t.type)) {
                  merged.push(t);
                }
              });
              setSearchResults(merged);
            } else {
              setSearchResults(localResults);
            }
          })
          .catch(() => setSearchResults(localResults));
      } else {
        setSearchResults(localResults);
      }
    }, 300);

    setSearchDebounce(timer);
    return () => clearTimeout(timer);
  }, [searchQuery, videos, tmdbApiKey]);

  const showToastNotification = (msg) => {
    setToast(msg);
    setTimeout(() => {
      setToast("");
    }, 3000);
  };

  const handleSaveSettings = (newSiteId, newApiKey) => {
    setSiteId(newSiteId);
    setTmdbApiKey(newApiKey);
    showToastNotification("✅ Configurations saved successfully!");
  };

  const handleQuickPlay = async (tmdbId, mediaType) => {
    // Attempt to resolve custom metadata from state or API
    let item = videos.find(v => v.id === tmdbId && v.type === mediaType);
    if (!item) {
      item = {
        id: tmdbId,
        title: `Custom Play (${tmdbId})`,
        type: mediaType,
        poster: "",
        backdrop: "",
        year: "N/A",
        rating: "N/A",
        genres: ["Custom"],
        description: `Streaming TMDB ID ${tmdbId} via Vidking player.`
      };
      setVideos((prev) => [...prev, item]);
    }
    setActiveVideo(item);
    setResumeOptions({});
  };

  const handlePlayNow = (title, url) => {
    const color = localStorage.getItem("vidking-player-color") || "6366f1";
    setPlayingVideo({ title, url, themeColor: `#${color}` });
    setActiveVideo(null);
    setTimeout(() => {
      if (playerSectionRef.current) {
        playerSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleClosePlayer = () => {
    setPlayingVideo(null);
  };

  // Helper to fetch details of dynamic bookmarks
  const getBookmarkMetadata = (h) => {
    const meta = videos.find(v => v.id === h.id && v.type === h.mediaType) ||
                 ANIME_CATALOG.find(v => v.id === h.id && v.type === h.mediaType);
    if (meta) return meta;
    return {
      id: h.id,
      title: `ID: ${h.id}`,
      poster: "",
      type: h.mediaType || "movie"
    };
  };

  // Filter explore catalog by category pill
  const getExploreList = () => {
    let list = videos;
    if (searchQuery.trim()) {
      list = searchResults;
    }
    
    if (currentCategory === "Movies") {
      return list.filter(v => v.type === "movie");
    } else if (currentCategory === "TV Shows") {
      return list.filter(v => v.type === "tv");
    } else if (currentCategory !== "All") {
      return list.filter(v => v.genres && v.genres.includes(currentCategory));
    }
    return list;
  };

  // Define dynamic Explore categories
  const categoriesList = ["All", "Movies", "TV Shows", "Anime", "Action", "Adventure", "Fantasy"];

  //Curate lists for shelves
  const onePieceTV = videos.filter(v => v.id === 37854);
  const onePieceMovies = videos.filter(v => v.type === "movie" && v.title.toLowerCase().includes("one piece"));
  
  const demonSlayerTV = videos.filter(v => v.id === 85937);
  const demonSlayerMovies = videos.filter(v => v.type === "movie" && (v.title.toLowerCase().includes("demon slayer") || v.title.toLowerCase().includes("kimetsu")));

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-dark)", color: "var(--text-primary)" }}>
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        tmdbApiKey={tmdbApiKey}
        onSelectVideo={(video) => {
          setActiveVideo(video);
          setResumeOptions({});
        }}
      />

      {/* Global Theater Player Section */}
      {playingVideo && (
        <>
          {/* Dimming Backdrop */}
          <div className="player-theater-backdrop" onClick={handleClosePlayer} />
          
          <section id="player-section" className="player-section" ref={playerSectionRef}>
            <div className="player-container" style={{ "--ambient-color": playingVideo.themeColor || "var(--primary)" }}>
              {/* Backlight Aura Glow */}
              <div className="player-ambient-aura" />
              
              <div className="player-header">
                <div className="player-meta-info">
                  <span className="now-playing-tag">NOW PLAYING</span>
                  <h2 id="player-title">{playingVideo.title}</h2>
                </div>
                <button
                  id="close-player-btn"
                  className="close-player-btn"
                  onClick={handleClosePlayer}
                  aria-label="Close Player"
                >
                  &times;
                </button>
              </div>
              <div className="player-iframe-wrapper">
                <div id="vidking-container">
                  <iframe
                    id="vidking-embed"
                    src={playingVideo.url}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Main Content Layout */}
      <main className="main-content" style={{ paddingBottom: "40px" }}>
        
        {/* Tab 1: Dashboard / Home */}
        {currentTab === "dashboard" && (
          <div className="tab-section active">
            
            {/* Hero Carousel */}
            <HeroCarousel
              items={videos.filter(v => v.id === 37854 || v.id === 85937 || v.id === 900667 || v.id === 635302)}
              onSelectVideo={(video) => {
                setActiveVideo(video);
                setResumeOptions({});
              }}
            />

            {/* Continue Watching Row */}
            {continueWatching.length > 0 && (
              <section className="home-shelf" id="continue-watching-shelf">
                <h2 className="shelf-title">Continue Watching</h2>
                <div className="horizontal-scroll">
                  {continueWatching.map((h) => {
                    const meta = getBookmarkMetadata(h);
                    const percent = Math.min(100, Math.max(0, (h.currentTime / (h.duration || 1)) * 100));
                    const subLabel = h.mediaType === "tv" || h.season ? `S${h.season} · Ep ${h.episode}` : "Movie";
                    return (
                      <div
                        key={`cw-${h.id}`}
                        className="continue-card"
                        onClick={() => {
                          setActiveVideo(meta);
                          setResumeOptions({
                            progress: Math.floor(h.currentTime || 0),
                            season: h.season,
                            episode: h.episode
                          });
                        }}
                      >
                        <div className="continue-img-container">
                          {meta.poster ? (
                            <img src={meta.poster} alt={meta.title} />
                          ) : (
                            <div style={{ position: "absolute", inset: 0, background: "#111" }} />
                          )}
                          <div className="continue-play-overlay">
                            <div className="continue-play-icon">▶</div>
                          </div>
                          <div className="continue-progress-bar">
                            <div className="continue-progress-fill" style={{ width: `${percent}%` }} />
                          </div>
                        </div>
                        <div className="continue-info">
                          <h4 className="continue-title">{meta.title}</h4>
                          <p className="continue-sub">{subLabel} · {Math.floor((h.currentTime || 0) / 60)}m</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Curated Shelf: One Piece TV */}
            {onePieceTV.length > 0 && (
              <section className="home-shelf">
                <h2 className="shelf-title">🏴‍☠️ One Piece (TV Arcs & Series)</h2>
                <div className="horizontal-scroll">
                  {onePieceTV.map((v) => (
                    <VideoCard
                      key={`${v.type}-${v.id}`}
                      video={v}
                      onSelectVideo={(video) => {
                        setActiveVideo(video);
                        setResumeOptions({});
                      }}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Curated Shelf: One Piece Movies */}
            {onePieceMovies.length > 0 && (
              <section className="home-shelf">
                <h2 className="shelf-title">🎬 One Piece Films & Movies</h2>
                <div className="horizontal-scroll">
                  {onePieceMovies.map((v) => (
                    <VideoCard
                      key={`${v.type}-${v.id}`}
                      video={v}
                      onSelectVideo={(video) => {
                        setActiveVideo(video);
                        setResumeOptions({});
                      }}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Curated Shelf: Demon Slayer TV */}
            {demonSlayerTV.length > 0 && (
              <section className="home-shelf">
                <h2 className="shelf-title">⚔️ Demon Slayer: Kimetsu no Yaiba</h2>
                <div className="horizontal-scroll">
                  {demonSlayerTV.map((v) => (
                    <VideoCard
                      key={`${v.type}-${v.id}`}
                      video={v}
                      onSelectVideo={(video) => {
                        setActiveVideo(video);
                        setResumeOptions({});
                      }}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Curated Shelf: Demon Slayer Movies */}
            {demonSlayerMovies.length > 0 && (
              <section className="home-shelf">
                <h2 className="shelf-title">🔥 Demon Slayer Movies & Specials</h2>
                <div className="horizontal-scroll">
                  {demonSlayerMovies.map((v) => (
                    <VideoCard
                      key={`${v.type}-${v.id}`}
                      video={v}
                      onSelectVideo={(video) => {
                        setActiveVideo(video);
                        setResumeOptions({});
                      }}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* TMDb Integration CTA Card (Shown only when tmdbApiKey is empty) */}
            {!tmdbApiKey && (
              <div className="tmdb-cta-card glass-card">
                <div className="tmdb-cta-icon">🔑</div>
                <h3 className="tmdb-cta-title">Unlock Unlimited Movies & TV Shows</h3>
                <p className="tmdb-cta-desc">
                  Connect your free TMDb (The Movie Database) account to search and stream millions of titles, discover trending shows, and browse full anime libraries instantly!
                </p>
                <button className="tmdb-cta-btn" onClick={() => setCurrentTab("settings")}>
                  Connect API Key
                </button>
              </div>
            )}

            {/* Trending Movies Shelf */}
            {trendingMovies.length > 0 && (
              <section className="home-shelf">
                <h2 className="shelf-title">🌟 Trending Movies</h2>
                <div className="horizontal-scroll">
                  {trendingMovies.map((v) => (
                    <VideoCard
                      key={`${v.type}-${v.id}`}
                      video={v}
                      onSelectVideo={(video) => {
                        setActiveVideo(video);
                        setResumeOptions({});
                      }}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Trending TV Shows Shelf */}
            {trendingTVShows.length > 0 && (
              <section className="home-shelf">
                <h2 className="shelf-title">📺 Popular TV Shows</h2>
                <div className="horizontal-scroll">
                  {trendingTVShows.map((v) => (
                    <VideoCard
                      key={`${v.type}-${v.id}`}
                      video={v}
                      onSelectVideo={(video) => {
                        setActiveVideo(video);
                        setResumeOptions({});
                      }}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Trending Anime Shelf */}
            {trendingAnime.length > 0 && (
              <section className="home-shelf">
                <h2 className="shelf-title">🌸 Trending Japanese Anime</h2>
                <div className="horizontal-scroll">
                  {trendingAnime.map((v) => (
                    <VideoCard
                      key={`${v.type}-${v.id}`}
                      video={v}
                      onSelectVideo={(video) => {
                        setActiveVideo(video);
                        setResumeOptions({});
                      }}
                    />
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {/* Tab 2: Explore / Catalog */}
        {currentTab === "videos" && (
          <div className="tab-section active">
            <div className="explore-header">
              <h2 className="explore-title">
                {searchQuery.trim() ? `Search Results for "${searchQuery}"` : "Explore curated catalog"}
              </h2>
              <nav className="category-nav">
                {categoriesList.map((cat) => (
                  <div
                    key={cat}
                    className={`category-pill ${currentCategory === cat ? "active" : ""}`}
                    onClick={() => setCurrentCategory(cat)}
                  >
                    {cat}
                  </div>
                ))}
              </nav>
            </div>
            
            <div className="video-grid">
              {getExploreList().length === 0 ? (
                <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "60px 20px", color: "var(--text-muted)" }}>
                  <span style={{ fontSize: "3rem", display: "block", marginBottom: "12px" }}>🔍</span>
                  <p style={{ fontSize: "1rem" }}>No results found in this category. Try a different query.</p>
                </div>
              ) : (
                getExploreList().map((v) => (
                  <VideoCard
                    key={`${v.type}-${v.id}`}
                    video={v}
                    onSelectVideo={(video) => {
                      setActiveVideo(video);
                      setResumeOptions({});
                    }}
                  />
                ))
              )}
            </div>
          </div>
        )}

        {/* Tab 3: Settings */}
        {currentTab === "settings" && (
          <Settings
            siteId={siteId}
            setSiteId={setSiteId}
            tmdbApiKey={tmdbApiKey}
            setTmdbApiKey={setTmdbApiKey}
            onSave={handleSaveSettings}
            onQuickPlay={handleQuickPlay}
          />
        )}
      </main>

      {/* DetailModal Config overlay */}
      {activeVideo && (
        <DetailModal
          video={activeVideo}
          resumeOptions={resumeOptions}
          onClose={() => {
            setActiveVideo(null);
            setResumeOptions({});
          }}
          onPlay={handlePlayNow}
          tmdbApiKey={tmdbApiKey}
        />
      )}

      {/* Global Toast Alert Notification */}
      {toast && (
        <div className="toast-notification">
          {toast}
        </div>
      )}

      <footer className="app-footer">
        <p>&copy; 2026 VidkingStream. Curated anime streaming portal powered by Vidking Embed.</p>
      </footer>
    </div>
  );
}
