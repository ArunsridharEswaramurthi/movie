"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import VideoCard from "@/components/VideoCard";
import DetailModal from "@/components/DetailModal";
import Settings from "@/components/Settings";
import { ANIME_CATALOG, getGenresFromIds } from "@/lib/constants";

const GENRE_CHIPS = ["All", "Action", "Romance", "Thriller", "Comedy", "Drama", "Sci-Fi", "Fantasy", "Horror", "Anime", "Crime", "Adventure"];

import { getLanguageLabel, getAmbientGlowColor, getEmbedUrl } from "@/lib/utils";

export default function Home() {
  const [currentTab, setCurrentTab] = useState("dashboard");
  const [siteId, setSiteId] = useState("12345");
  const [tmdbApiKey, setTmdbApiKey] = useState("44531997758615c4af0f1d7724b5819d");
  
  const [videos, setVideos] = useState(ANIME_CATALOG);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchDebounceRef = useRef(null);
  const surpriseIntervalRef = useRef(null);
  
  // Advanced Filter & Sort states
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortBy, setSortBy] = useState("rating");

  const [activeVideo, setActiveVideoState] = useState(null);
  const [resumeOptions, setResumeOptions] = useState({});
  const [playingVideo, setPlayingVideo] = useState(null);
  
  const [continueWatching, setContinueWatching] = useState([]);
  const [toast, setToast] = useState("");
  
  // Dynamic global catalog shelving states
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTVShows, setTrendingTVShows] = useState([]);
  const [trendingAnime, setTrendingAnime] = useState([]);
  const [trendingTamilMovies, setTrendingTamilMovies] = useState([]);
  const [trendingTamilTV, setTrendingTamilTV] = useState([]);

  // Video player control states
  const [currentPlayerTime, setCurrentPlayerTime] = useState(0);
  const [currentPlayerDuration, setCurrentPlayerDuration] = useState(0);
  const [ambientGlowEnabled, setAmbientGlowEnabled] = useState(true);
  
  const playerSectionRef = useRef(null);

  // ===== NEW FEATURE STATES =====
  const [showSplash, setShowSplash] = useState(true);
  const [watchlist, setWatchlist] = useState([]);
  const [selectedGenreChip, setSelectedGenreChip] = useState("All");
  const [miniPlayerVideo, setMiniPlayerVideo] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPullRefreshing, setIsPullRefreshing] = useState(false);
  const [newReleases, setNewReleases] = useState([]);
  const [exploreLimit, setExploreLimit] = useState(30);
  const [theme, setTheme] = useState("dark");
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [activePlayerTab, setActivePlayerTab] = useState("servers");
  const mainContentRef = useRef(null);
  const touchStartY = useRef(null);

  // ===== PROFILE & PIN & REQUEST UPGRADE STATES =====
  const [profiles, setProfiles] = useState([]);
  const [activeProfile, setActiveProfile] = useState(null);
  const [showProfileSelector, setShowProfileSelector] = useState(true);
  const [newProfileName, setNewProfileName] = useState("");
  const [newProfileAvatar, setNewProfileAvatar] = useState("🍿");
  const [profileAddMode, setProfileAddMode] = useState(false);

  const [parentalPin, setParentalPin] = useState(null);
  const [parentalEnabled, setParentalEnabled] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinChallengeCallback, setPinChallengeCallback] = useState(null);
  const [unlockedTitles, setUnlockedTitles] = useState([]);
  const [pinSetupMode, setPinSetupMode] = useState(false);

  const [playerSpeed, setPlayerSpeed] = useState(1.0);

  const [requests, setRequests] = useState([]);
  const [showRequestDrawer, setShowRequestDrawer] = useState(false);
  const [requestName, setRequestName] = useState("");
  const [requestType, setRequestType] = useState("movie");
  const [requestYear, setRequestYear] = useState("");
  const [requestNotes, setRequestNotes] = useState("");

  const showToastNotification = (msg) => {
    setToast(msg);
    setTimeout(() => {
      setToast("");
    }, 3000);
  };

  // Initialize configurations from local storage
  useEffect(() => {
    const savedSiteId = localStorage.getItem("vidking-site-id") || "12345";
    const savedApiKey = localStorage.getItem("vidking-tmdb-key") || "44531997758615c4af0f1d7724b5819d";
    setSiteId(savedSiteId);
    setTmdbApiKey(savedApiKey);

    // Register Service Worker
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js")
        .then((reg) => console.log("Service Worker registered with scope:", reg.scope))
        .catch((err) => console.error("Service Worker registration failed:", err));
    }

    // Load profiles
    let loadedProfiles = [];
    try {
      const savedProfiles = localStorage.getItem("advera-profiles");
      if (savedProfiles) {
        loadedProfiles = JSON.parse(savedProfiles);
      }
    } catch (e) {}
    if (!loadedProfiles || loadedProfiles.length === 0) {
      loadedProfiles = [{ id: "p1", name: "Guest", avatar: "🍿" }];
      localStorage.setItem("advera-profiles", JSON.stringify(loadedProfiles));
    }
    setProfiles(loadedProfiles);

    let activeP = loadedProfiles[0];
    try {
      const savedActive = localStorage.getItem("advera-active-profile");
      if (savedActive) {
        const parsed = JSON.parse(savedActive);
        if (loadedProfiles.some(p => p.id === parsed.id)) {
          activeP = parsed;
        }
      }
    } catch (e) {}
    setActiveProfile(activeP);
    localStorage.setItem("advera-active-profile", JSON.stringify(activeP));

    // Load parental lock
    const pin = localStorage.getItem("advera-parental-pin");
    const enabled = localStorage.getItem("advera-parental-enabled") === "true";
    setParentalPin(pin);
    setParentalEnabled(enabled);

    // Load requests
    try {
      const reqs = localStorage.getItem("advera-requests");
      if (reqs) setRequests(JSON.parse(reqs));
    } catch(e) {}

    // Load theme
    const savedTheme = localStorage.getItem("advera-theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Auto-dismiss splash
    setTimeout(() => setShowSplash(false), 2500);
  }, []);

  // Profile-scoped Watchlist and History loader
  useEffect(() => {
    if (!activeProfile) return;

    // Save active profile to localStorage (Profile Persistence Bug Fix)
    localStorage.setItem("advera-active-profile", JSON.stringify(activeProfile));

    // Reset session parental lock whitelisting (Parental Lock Leakage Bug Fix)
    setUnlockedTitles([]);

    // Load Watchlist
    try {
      const saved = localStorage.getItem(`advera-watchlist-${activeProfile.id}`);
      setWatchlist(saved ? JSON.parse(saved) : []);
    } catch (e) {
      setWatchlist([]);
    }

    // Load History
    loadContinueWatching(activeProfile.id);
  }, [activeProfile]);

  // Set up message listener for watch progress events from iframe
  useEffect(() => {
    function handleMessage(event) {
      try {
        const payload = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (payload?.type === "PLAYER_EVENT" && payload.data && activeProfile) {
          // Resolve matched video details from the incoming event payload ID (Stale Closure Progress Bug Fix)
          const matchedVideo = videos.find(v => v.id === payload.data.id) || activeVideo;
          const progressData = {
            ...payload.data,
            mediaType: matchedVideo?.type || payload.data.mediaType || "movie",
            timestamp: Date.now()
          };
          localStorage.setItem(`progress-${activeProfile.id}-${payload.data.id}`, JSON.stringify(progressData));
          loadContinueWatching(activeProfile.id);

          if (payload.data.currentTime !== undefined) {
            setCurrentPlayerTime(payload.data.currentTime);
          }
          if (payload.data.duration !== undefined) {
            setCurrentPlayerDuration(payload.data.duration);
          }
        }
      } catch (e) {
        // Non-JSON message, ignore
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [activeVideo, activeProfile, videos]);
 
  // Reset player loading overlay when parameters change
  useEffect(() => {
    if (playingVideo) {
      setIframeLoading(true);
    }
  }, [
    playingVideo?.selectedServer,
    playingVideo?.selectedSeason,
    playingVideo?.selectedEpisode,
    playingVideo?.video?.id
  ]);

  // Default to appropriate tab only when a brand new video is played
  useEffect(() => {
    if (playingVideo?.video) {
      setActivePlayerTab(playingVideo.video.type === "tv" ? "episodes" : "servers");
    }
  }, [playingVideo?.video?.id]);


  // Load Continue Watching lists from local storage
  const loadContinueWatching = (profileId) => {
    if (!profileId) return;
    const history = [];
    const prefix = `progress-${profileId}-`;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(prefix)) {
        try {
          const d = JSON.parse(localStorage.getItem(key));
          if (d && d.id) history.push(d);
        } catch (e) {}
      }
    }
    history.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    setContinueWatching(history);
  };

  // Parental PIN Lock Checker
  const checkParentalLock = (video, onSuccess) => {
    if (!video) return;
    const isAdult = video.genres && (
      video.genres.includes("Ullu") ||
      video.genres.includes("Adult") ||
      video.genres.some(g => ["Ullu", "Adult", "Kooku", "Rabbit", "PrimeShots", "ALTBalaji", "Erotic"].some(adultWord => g.toLowerCase().includes(adultWord.toLowerCase())))
    );
    if (parentalEnabled && isAdult && parentalPin && !unlockedTitles.includes(video.id)) {
      setPinInput("");
      setPinChallengeCallback(() => () => {
        setUnlockedTitles(prev => [...prev, video.id]);
        onSuccess();
      });
      setShowPinModal(true);
    } else {
      onSuccess();
    }
  };

  // Wrapped Set Active Video with Parental PIN check
  const setActiveVideo = (video) => {
    if (!video) {
      setActiveVideoState(null);
      return;
    }
    checkParentalLock(video, () => {
      setActiveVideoState(video);
    });
  };

  // Toggle watchlist scoped to profile
  const toggleWatchlist = useCallback((video) => {
    if (!activeProfile) return;
    setWatchlist(prev => {
      const exists = prev.some(v => v.id === video.id && v.type === video.type);
      let next;
      if (exists) {
        next = prev.filter(v => !(v.id === video.id && v.type === video.type));
        showToastNotification(`💔 Removed "${video.title}" from watchlist`);
      } else {
        next = [...prev, { id: video.id, type: video.type, title: video.title, poster: video.poster, year: video.year, rating: video.rating, genres: video.genres, description: video.description, addedAt: Date.now() }];
        showToastNotification(`❤️ Added "${video.title}" to watchlist`);
      }
      localStorage.setItem(`advera-watchlist-${activeProfile.id}`, JSON.stringify(next));
      return next;
    });
  }, [activeProfile]);

  const isInWatchlist = useCallback((video) => {
    return watchlist.some(v => v.id === video.id && v.type === video.type);
  }, [watchlist]);

  // Toggle theme
  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("advera-theme", next);
      document.documentElement.setAttribute("data-theme", next);
      return next;
    });
  }, []);

  // Pull to refresh handler
  const handlePullRefresh = useCallback(() => {
    if (isPullRefreshing) return;
    setIsPullRefreshing(true);
    showToastNotification("🔄 Refreshing content...");
    setTimeout(() => {
      setIsPullRefreshing(false);
      showToastNotification("✅ Content refreshed!");
    }, 1500);
  }, [isPullRefreshing]);

  // Infinite scroll for Explore tab
  useEffect(() => {
    if (currentTab !== "videos") return;
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 400) {
        setExploreLimit(prev => prev + 20);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentTab]);

  // Reset explore limit on tab or filter change
  useEffect(() => {
    setExploreLimit(30);
  }, [currentTab, selectedCategory, selectedLanguage, selectedGenre, searchQuery]);

  // Fetch new releases
  useEffect(() => {
    if (!tmdbApiKey) return;
    const headers = { "x-tmdb-key": tmdbApiKey };
    const today = new Date();
    const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
    const dateStr = thirtyDaysAgo.toISOString().split("T")[0];
    fetch(`/api/tmdb/discover/movie?sort_by=popularity.desc&primary_release_date.gte=${dateStr}&include_adult=true`, { headers })
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data?.results) {
          const mapped = data.results.map(item => {
            const mappedGenres = getGenresFromIds(item.genre_ids, item.origin_country || []);
            return {
              id: item.id,
              title: item.title || item.name,
              type: "movie",
              poster: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : "",
              backdrop: item.backdrop_path ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}` : "",
              year: (item.release_date || "").substring(0, 4) || "N/A",
              rating: item.vote_average ? item.vote_average.toFixed(1) : "N/A",
              genres: mappedGenres,
              language: getLanguageLabel(item.original_language, mappedGenres),
              description: item.overview || "No description available."
            };
          });
          setNewReleases(mapped);
        }
      }).catch(() => {});
  }, [tmdbApiKey]);

  // Touch swipe for tab navigation
  useEffect(() => {
    const tabs = ["dashboard", "videos", "history", "settings"];
    let startX = 0;
    let startY = 0;
    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = endX - startX;
      const diffY = endY - startY;
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 80) {
        const idx = tabs.indexOf(currentTab);
        if (diffX < 0 && idx < tabs.length - 1) {
          if (navigator.vibrate) navigator.vibrate(15);
          setCurrentTab(tabs[idx + 1]);
        } else if (diffX > 0 && idx > 0) {
          if (navigator.vibrate) navigator.vibrate(15);
          setCurrentTab(tabs[idx - 1]);
        }
      }
    };
    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentTab]);

  // Fetch dynamic catalog shelves if TMDb API key is set
  useEffect(() => {
    if (!tmdbApiKey) {
      setVideos(ANIME_CATALOG);
      setTrendingMovies([]);
      setTrendingTVShows([]);
      setTrendingAnime([]);
      setTrendingTamilMovies([]);
      setTrendingTamilTV([]);
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
        const trendingAnimePromise = fetch("/api/tmdb/discover/tv?with_genres=16&with_original_language=ja&sort_by=popularity.desc&include_adult=true", { headers }).then(r => r.ok ? r.json() : null);

        // Fetch Tamil movies & TV Shows
        const trendingTamilMoviesPromise = fetch("/api/tmdb/discover/movie?with_original_language=ta&sort_by=popularity.desc&include_adult=true", { headers }).then(r => r.ok ? r.json() : null);
        const trendingTamilTVPromise = fetch("/api/tmdb/discover/tv?with_original_language=ta&sort_by=popularity.desc&include_adult=true", { headers }).then(r => r.ok ? r.json() : null);

        const [
          opMoviesData,
          dsMoviesData,
          opTvData,
          dsTvData,
          trendingMoviesData,
          trendingTVShowsData,
          trendingAnimeData,
          trendingTamilMoviesData,
          trendingTamilTVData
        ] = await Promise.all([
          opMoviesPromise,
          dsMoviesPromise,
          opTvPromise,
          dsTvPromise,
          trendingMoviesPromise,
          trendingTVShowsPromise,
          trendingAnimePromise,
          trendingTamilMoviesPromise,
          trendingTamilTVPromise
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

        const mapTmdbs = (item, mediaType) => {
          const mappedGenres = getGenresFromIds(item.genre_ids, item.origin_country || []);
          return {
            id: item.id,
            title: item.title || item.name,
            type: mediaType || item.media_type || (item.title ? "movie" : "tv"),
            poster: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : "",
            backdrop: item.backdrop_path ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}` : "",
            year: (item.release_date || item.first_air_date || "").substring(0, 4) || "N/A",
            rating: item.vote_average ? item.vote_average.toFixed(1) : "N/A",
            genres: mappedGenres,
            language: getLanguageLabel(item.original_language, mappedGenres),
            description: item.overview || "No description available."
          };
        };

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

        if (trendingTamilMoviesData?.results) {
          const mappedTamilMovies = trendingTamilMoviesData.results.map(m => {
            const item = mapTmdbs(m, "movie");
            if (!item.genres.includes("Tamil")) item.genres.push("Tamil");
            return item;
          });
          setTrendingTamilMovies(mappedTamilMovies);
          mappedTamilMovies.forEach(m => upsertItem(m));
        }

        if (trendingTamilTVData?.results) {
          const mappedTamilTV = trendingTamilTVData.results.map(t => {
            const item = mapTmdbs(t, "tv");
            if (!item.genres.includes("Tamil")) item.genres.push("Tamil");
            return item;
          });
          setTrendingTamilTV(mappedTamilTV);
          mappedTamilTV.forEach(t => upsertItem(t));
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
    if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    searchDebounceRef.current = setTimeout(() => {
      // Auto redirect search query to Explore tab
      setCurrentTab("videos");
      setSelectedCategory("All");
      setSelectedLanguage("All");
      setSelectedGenre("All");

      // Local matching first
      const localResults = videos.filter((v) =>
        (v.title || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (v.description || "").toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (tmdbApiKey) {
        fetch(`/api/tmdb/search/multi?query=${encodeURIComponent(searchQuery)}&include_adult=true`, {
          headers: { "x-tmdb-key": tmdbApiKey }
        })
          .then((r) => (r.ok ? r.json() : null))
          .then((data) => {
            if (data?.results) {
              const tmdbResults = data.results
                .filter((item) => item.media_type === "movie" || item.media_type === "tv")
                .map((item) => {
                  const mappedGenres = getGenresFromIds(item.genre_ids, item.origin_country);
                  return {
                    id: item.id,
                    title: item.title || item.name,
                    type: item.media_type,
                    poster: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : "",
                    backdrop: item.backdrop_path ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}` : "",
                    year: (item.release_date || item.first_air_date || "").substring(0, 4) || "N/A",
                    rating: item.vote_average ? item.vote_average.toFixed(1) : "N/A",
                    genres: mappedGenres,
                    language: getLanguageLabel(item.original_language, mappedGenres),
                    description: item.overview || "No description available."
                  };
                });
              
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

    return () => {
      if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
    };
  }, [searchQuery, videos, tmdbApiKey]);



  const handleSaveSettings = (newSiteId, newApiKey) => {
    setSiteId(newSiteId);
    setTmdbApiKey(newApiKey);
    if (typeof window !== "undefined") {
      localStorage.setItem("vidking-site-id", newSiteId);
      localStorage.setItem("vidking-tmdb-key", newApiKey);
    }
    showToastNotification("✅ Configurations saved successfully!");
  };

  const handleQuickPlay = async (tmdbId, mediaType) => {
    // Attempt to resolve custom metadata from state or API
    let item = videos.find(v => v.id === tmdbId && v.type === mediaType);
    if (!item) {
      let resolvedGenres = ["Custom"];
      if (tmdbApiKey) {
        try {
          const res = await fetch(`/api/tmdb/${mediaType}/${tmdbId}`, { headers: { "x-tmdb-key": tmdbApiKey } });
          if (res.ok) {
            const data = await res.json();
            const genreIds = data.genres ? data.genres.map(g => g.id) : [];
            resolvedGenres = getGenresFromIds(genreIds, data.origin_country || []);
          }
        } catch (e) {}
      }
      item = {
        id: tmdbId,
        title: `Custom Play (${tmdbId})`,
        type: mediaType,
        poster: "",
        backdrop: "",
        year: "N/A",
        rating: "N/A",
        genres: resolvedGenres,
        description: `Streaming TMDB ID ${tmdbId} via Vidking player.`
      };
      setVideos((prev) => [...prev, item]);
    }
    setActiveVideo(item);
    setResumeOptions({});
  };



  const handlePlayNowRaw = (config) => {
    const color = config.colorText || getAmbientGlowColor(config.video).replace("#", "") || "6366f1";
    setPlayingVideo({
      video: config.video,
      selectedServer: config.selectedServer || "vidsrc_to",
      selectedSeason: config.selectedSeason || 1,
      selectedEpisode: config.selectedEpisode || 1,
      colorText: color,
      autoplay: config.autoplay !== undefined ? config.autoplay : true,
      nextEpisode: config.nextEpisode !== undefined ? config.nextEpisode : true,
      episodeSelector: config.episodeSelector !== undefined ? config.episodeSelector : true,
      themeColor: `#${color}`,
      progress: config.progress || 0
    });
    setCurrentPlayerTime(config.progress || 0);
    setCurrentPlayerDuration(0);
    setActiveVideoState(null);
    setTimeout(() => {
      if (playerSectionRef.current) {
        playerSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handlePlayNow = (config) => {
    checkParentalLock(config.video, () => {
      handlePlayNowRaw(config);
    });
  };

  const handleUpdatePlayerConfig = (updatedFields) => {
    setPlayingVideo(prev => {
      if (!prev) return null;
      return { ...prev, ...updatedFields };
    });
  };

  const handleSeek = (secondsOffset) => {
    if (!playingVideo) return;
    const newTime = Math.max(0, Math.min(currentPlayerDuration || Infinity, currentPlayerTime + secondsOffset));
    setCurrentPlayerTime(newTime);
    handleUpdatePlayerConfig({ progress: Math.floor(newTime) });

    try {
      const iframe = document.getElementById(`embed-${playingVideo.selectedServer}`);
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage(JSON.stringify({ type: "SEEK", data: { time: newTime } }), "*");
      }
    } catch (e) {}
  };

  const handleClosePlayer = () => {
    // Move to mini player instead of closing entirely
    if (playingVideo && !miniPlayerVideo) {
      setMiniPlayerVideo(playingVideo);
    }
    setPlayingVideo(null);
    setIsFullscreen(false);
  };

  const handleCloseMiniPlayer = () => {
    setMiniPlayerVideo(null);
  };

  const handleExpandMiniPlayer = () => {
    if (miniPlayerVideo) {
      setPlayingVideo(miniPlayerVideo);
      setMiniPlayerVideo(null);
    }
  };

  const handleToggleFullscreen = () => {
    setIsFullscreen(prev => !prev);
  };

  // Keyboard shortcuts listener for custom player control
  useEffect(() => {
    if (!playingVideo) return;
    const handleKeyDown = (e) => {
      if (currentTab !== "dashboard") return; // Spacebar scroll lock bypass fix
      if (document.activeElement && (
        document.activeElement.tagName === "INPUT" ||
        document.activeElement.tagName === "TEXTAREA" ||
        document.activeElement.tagName === "SELECT"
      )) {
        return;
      }
      
      if (e.key === " ") {
        e.preventDefault();
        try {
          const iframe = document.getElementById(`embed-${playingVideo.selectedServer}`);
          if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage(JSON.stringify({ type: "TOGGLE_PLAY" }), "*");
          }
        } catch (err) {}
        showToastNotification("⏸ Play / Pause");
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handleSeek(-10);
        showToastNotification("⏪ Seek -10s");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleSeek(10);
        showToastNotification("⏩ Seek +10s");
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        handleToggleFullscreen();
        showToastNotification("⛶ Fullscreen toggled");
      } else if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        try {
          const iframe = document.getElementById(`embed-${playingVideo.selectedServer}`);
          if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage(JSON.stringify({ type: "MUTE" }), "*");
          }
        } catch (err) {}
        showToastNotification("🔇 Audio muted");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playingVideo, currentPlayerTime, currentPlayerDuration, currentTab]);

  const handleSurpriseMe = () => {
    if (!videos || videos.length === 0) return;
    if (surpriseIntervalRef.current) clearInterval(surpriseIntervalRef.current);
    
    showToastNotification("🎲 Spinning the movie wheel of fortune...");
    
    let spinCount = 0;
    surpriseIntervalRef.current = setInterval(() => {
      const tempVideo = videos[Math.floor(Math.random() * videos.length)];
      setToast(`🎲 Checking: ${tempVideo.title || "Unknown"}...`);
      spinCount++;
      if (spinCount >= 8) {
        clearInterval(surpriseIntervalRef.current);
        surpriseIntervalRef.current = null;
        const finalVideo = videos[Math.floor(Math.random() * videos.length)];
        setToast(`✨ Winner: ${finalVideo.title || "Unknown"}!`);
        setTimeout(() => {
          setActiveVideo(finalVideo);
          setResumeOptions({});
          showToastNotification(`🎯 Selected: ${finalVideo.title || "Unknown"}`);
        }, 800);
      }
    }, 150);
  };

  const handleCreateProfile = () => {
    const name = newProfileName.trim();
    if (!name) return;
    const newP = {
      id: `p-${Date.now()}`,
      name,
      avatar: newProfileAvatar
    };
    const updated = [...profiles, newP];
    setProfiles(updated);
    localStorage.setItem("advera-profiles", JSON.stringify(updated));
    setNewProfileName("");
    setProfileAddMode(false);
    showToastNotification(`👤 Profile "${name}" created!`);
  };

  const handleDeleteProfile = (id) => {
    if (id === "p1") return;
    const updated = profiles.filter(p => p.id !== id);
    setProfiles(updated);
    localStorage.setItem("advera-profiles", JSON.stringify(updated));
    
    // Clear watchlist and history for deleted profile
    localStorage.removeItem(`advera-watchlist-${id}`);
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i);
      if (key && key.startsWith(`progress-${id}-`)) {
        localStorage.removeItem(key);
      }
    }
    
    // If the active profile was deleted, switch back to p1 (Guest) (Dangling Deleted Profile Bug Fix)
    if (activeProfile && activeProfile.id === id) {
      const guest = updated.find(p => p.id === "p1") || { id: "p1", name: "Guest", avatar: "🍿" };
      setActiveProfile(guest);
      localStorage.setItem("advera-active-profile", JSON.stringify(guest));
    }
    showToastNotification("🗑️ Profile deleted successfully");
  };

  const handlePinKey = (val) => {
    if (pinInput.length >= 4) return;
    if (navigator.vibrate) navigator.vibrate(10);
    const nextPin = pinInput + val;
    setPinInput(nextPin);
    
    if (nextPin.length === 4) {
      if (nextPin === parentalPin) {
        if (navigator.vibrate) navigator.vibrate([20, 50]);
        showToastNotification("🔓 Access Granted");
        setShowPinModal(false);
        setPinInput("");
        if (pinChallengeCallback) {
          pinChallengeCallback();
          setPinChallengeCallback(null);
        }
      } else {
        if (navigator.vibrate) navigator.vibrate([80, 80]);
        showToastNotification("❌ Incorrect PIN. Try again.");
        const pinDisplay = document.querySelector(".pin-display");
        if (pinDisplay) {
          pinDisplay.classList.add("shake-animation");
          setTimeout(() => pinDisplay.classList.remove("shake-animation"), 500);
        }
        setPinInput("");
      }
    }
  };

  const handleSubmitRequest = () => {
    const name = requestName.trim();
    if (!name) {
      alert("Please enter a title name");
      return;
    }
    const newReq = {
      id: Date.now(),
      name,
      type: requestType,
      year: requestYear,
      notes: requestNotes,
      status: "Pending Review",
      date: new Date().toLocaleDateString()
    };
    const updated = [newReq, ...requests];
    setRequests(updated);
    localStorage.setItem("advera-requests", JSON.stringify(updated));
    
    setRequestName("");
    setRequestYear("");
    setRequestNotes("");
    setShowRequestDrawer(false);
    showToastNotification(`🚀 Request for "${name}" submitted!`);
    
    // Auto-resolve request mockup simulation
    setTimeout(() => {
      setRequests(prev => {
        if (!prev.some(r => r.id === newReq.id)) return prev;
        const list = prev.map(r => r.id === newReq.id ? { ...r, status: "Available" } : r);
        localStorage.setItem("advera-requests", JSON.stringify(list));
        return list;
      });
      showToastNotification(`🎉 Title "${name}" has been successfully indexed & is now available!`);
    }, 10000);
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

  // Filter explore catalog by category, language, genre, and sort it
  const getExploreList = () => {
    let list = videos;
    if (searchQuery.trim()) {
      list = searchResults;
    }
    
    // Apply Category Filter
    if (selectedCategory !== "All") {
      if (selectedCategory === "Anime") {
        list = list.filter(v => v.genres && v.genres.includes("Anime"));
      } else if (selectedCategory === "Adult") {
        list = list.filter(v =>
          v.genres && (
            v.genres.includes("Ullu") ||
            v.genres.includes("Kooku") ||
            v.genres.includes("Rabbit") ||
            v.genres.includes("PrimeShots") ||
            v.genres.includes("ALTBalaji") ||
            v.genres.includes("HotShots") ||
            v.genres.includes("Hot Masti") ||
            v.genres.includes("Boom Movies") ||
            v.genres.includes("WooW") ||
            v.genres.includes("Klikk") ||
            v.genres.includes("Hr OTT") ||
            v.genres.includes("Hot Next") ||
            v.genres.includes("X Prime") ||
            v.genres.includes("Hot Sutra") ||
            v.genres.includes("Hotshot Prime") ||
            v.genres.includes("Hokyo") ||
            v.genres.includes("Paraflixx") ||
            v.genres.includes("UrbanflixTV")
          )
        );
      } else {
        list = list.filter(v => v.type === selectedCategory);
      }
    }

    // Apply Language Filter
    if (selectedLanguage !== "All") {
      list = list.filter(v => {
        const lang = getLanguageLabel(v.original_language || v.language, v.genres);
        return lang === selectedLanguage;
      });
    }

    // Apply Genre Filter
    if (selectedGenre !== "All") {
      list = list.filter(v => v.genres && v.genres.includes(selectedGenre));
    }
    
    // Sort Results
    const sorted = [...list];
    if (sortBy === "rating") {
      sorted.sort((a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0));
    } else if (sortBy === "year-new") {
      sorted.sort((a, b) => (parseInt(b.year) || 0) - (parseInt(a.year) || 0));
    } else if (sortBy === "year-old") {
      sorted.sort((a, b) => (parseInt(a.year) || 0) - (parseInt(b.year) || 0));
    } else if (sortBy === "title-az") {
      sorted.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
    } else if (sortBy === "title-za") {
      sorted.sort((a, b) => (b.title || "").localeCompare(a.title || ""));
    }
    return sorted;
  };

  //Curate lists for shelves
  const onePieceTV = videos.filter(v => v.id === 37854);
  const onePieceMovies = videos.filter(v => v.type === "movie" && v.title.toLowerCase().includes("one piece"));
  
  const demonSlayerTV = videos.filter(v => v.id === 85937);
  const demonSlayerMovies = videos.filter(v => v.type === "movie" && (v.title.toLowerCase().includes("demon slayer") || v.title.toLowerCase().includes("kimetsu")));

  const tamilMovies = videos.filter(v => v.type === "movie" && v.genres && v.genres.includes("Tamil"));
  const tamilTV = videos.filter(v => v.type === "tv" && v.genres && v.genres.includes("Tamil"));
  const premiumAdultSeries = videos.filter(v =>
    v.genres && (
      v.genres.includes("Ullu") ||
      v.genres.includes("Kooku") ||
      v.genres.includes("Rabbit") ||
      v.genres.includes("PrimeShots") ||
      v.genres.includes("ALTBalaji") ||
      v.genres.includes("HotShots") ||
      v.genres.includes("Hot Masti") ||
      v.genres.includes("Boom Movies") ||
      v.genres.includes("WooW") ||
      v.genres.includes("Klikk") ||
      v.genres.includes("Hr OTT") ||
      v.genres.includes("Hot Next") ||
      v.genres.includes("X Prime") ||
      v.genres.includes("Hot Sutra") ||
      v.genres.includes("Hotshot Prime") ||
      v.genres.includes("Hokyo") ||
      v.genres.includes("Paraflixx") ||
      v.genres.includes("UrbanflixTV")
    )
  );

  // Build filtered genre-chip list from Home
  const getGenreFilteredVideos = (shelf) => {
    if (selectedGenreChip === "All") return shelf;
    return shelf.filter(v => v.genres && v.genres.some(g => g.toLowerCase().includes(selectedGenreChip.toLowerCase())));
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-dark)", color: "var(--text-primary)" }} data-theme={theme}>

      {/* Animated Splash Screen */}
      {showSplash && (
        <div className="splash-screen">
          <div className="splash-logo">🎬</div>
          <div className="splash-text"><span className="splash-accent">ADvera</span></div>
          <div className="splash-tagline">Premium Streaming</div>
        </div>
      )}

      {/* Fullscreen Player */}
      {isFullscreen && playingVideo && (
        <div className="fullscreen-player">
          <button className="fullscreen-close" onClick={() => setIsFullscreen(false)}>&times;</button>
          <iframe
            src={getEmbedUrl(playingVideo)}
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
          />
        </div>
      )}

      {/* Mini Floating Player */}
      {miniPlayerVideo && !playingVideo && (
        <div className="mini-player">
          <iframe
            src={getEmbedUrl(miniPlayerVideo)}
            allow="autoplay; picture-in-picture"
          />
          <div className="mini-player-controls">
            <span className="mini-player-title">{miniPlayerVideo.video?.title}</span>
            <div className="mini-player-btns">
              <button className="mini-player-btn" onClick={handleExpandMiniPlayer}>⬆️</button>
              <button className="mini-player-btn" onClick={handleCloseMiniPlayer}>✕</button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Filter Drawer */}
      {filterDrawerOpen && (
        <>
          <div className="filter-drawer-overlay" onClick={() => setFilterDrawerOpen(false)} />
          <div className="filter-drawer">
            <div className="filter-drawer-handle" />
            <h3>🔍 Filters</h3>
            <div className="filter-item">
              <label className="filter-label">Category</label>
              <select className="filter-select" value={selectedCategory} onChange={(e) => { setSelectedCategory(e.target.value); setFilterDrawerOpen(false); }}>
                <option value="All">All Categories</option>
                <option value="movie">Movies</option>
                <option value="tv">TV / Web Series</option>
                <option value="Anime">Anime</option>
                <option value="Adult">Adult / Erotic Series</option>
              </select>
            </div>
            <div className="filter-item">
              <label className="filter-label">Language</label>
              <select className="filter-select" value={selectedLanguage} onChange={(e) => { setSelectedLanguage(e.target.value); setFilterDrawerOpen(false); }}>
                <option value="All">All Languages</option>
                <option value="Tamil">Tamil</option>
                <option value="English">English</option>
                <option value="Japanese">Japanese</option>
              </select>
            </div>
            <div className="filter-item">
              <label className="filter-label">Genre</label>
              <select className="filter-select" value={selectedGenre} onChange={(e) => { setSelectedGenre(e.target.value); setFilterDrawerOpen(false); }}>
                <option value="All">All Genres</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Crime">Crime</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
                <option value="Thriller">Thriller</option>
                <option value="Animation">Animation</option>
              </select>
            </div>
            <div className="filter-item sort-item">
              <label className="filter-label">Sort By</label>
              <select className="filter-select" value={sortBy} onChange={(e) => { setSortBy(e.target.value); setFilterDrawerOpen(false); }}>
                <option value="rating">Rating (Highest First)</option>
                <option value="year-new">Release Year (Newest)</option>
                <option value="year-old">Release Year (Oldest)</option>
                <option value="title-az">Alphabetical (A - Z)</option>
                <option value="title-za">Alphabetical (Z - A)</option>
              </select>
            </div>
          </div>
        </>
      )}
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
        onSurpriseMe={handleSurpriseMe}
      />

      {/* Global Theater Player Section */}
      {playingVideo && (() => {
        const embedUrl = getEmbedUrl(playingVideo);
        const { video, selectedServer, selectedSeason, selectedEpisode } = playingVideo;
        const totalEpisodes = video.seasons?.find(s => s.season === selectedSeason)?.episodes || 10;
        
        return (
          <>
            {/* Dimming Backdrop */}
            <div className="player-theater-backdrop" onClick={handleClosePlayer} />
            
            <section id="player-section" className="player-section" ref={playerSectionRef}>
              <div className="player-container" style={{ "--ambient-color": playingVideo.themeColor || "var(--primary)" }}>
                {/* Backlight Aura Glow */}
                {ambientGlowEnabled && <div className="player-ambient-aura" />}
                
                <div className="player-header">
                  <div className="player-meta-info">
                    <span className="now-playing-tag">NOW PLAYING</span>
                    <h2 id="player-title">
                      {video.title} {video.type === "tv" ? `· Season ${selectedSeason} · Episode ${selectedEpisode}` : ""}
                    </h2>
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <button
                      className="close-player-btn"
                      onClick={handleToggleFullscreen}
                      aria-label="Fullscreen"
                      title="Fullscreen"
                      style={{ fontSize: "1rem" }}
                    >
                      ⛶
                    </button>
                    <button
                      id="close-player-btn"
                      className="close-player-btn"
                      onClick={handleClosePlayer}
                      aria-label="Close Player"
                    >
                      &times;
                    </button>
                  </div>
                </div>
                
                <div className="player-iframe-wrapper">
                  {/* Premium Loading Placeholder Overlay */}
                  {iframeLoading && (
                    <div className="player-loading-placeholder">
                      <div 
                        className="player-loading-backdrop" 
                        style={{ backgroundImage: video.backdrop ? `url(${video.backdrop})` : `url(${video.poster})` }} 
                      />
                      <div className="player-loading-content">
                        <div className="player-loading-spinner" style={{ borderColor: `${playingVideo.themeColor || "var(--primary)"} transparent transparent transparent` }} />
                        <h3>Initializing Secure Stream</h3>
                        <p>Connecting to {selectedServer === "rive" ? "Rive.fm" : selectedServer === "vidsrc_to" ? "VidSrc.to" : selectedServer === "tamil" ? "Tamil 🎬 (AnyEmbed)" : selectedServer}...</p>
                        <span>Optimizing buffering speed for your connection</span>
                      </div>
                    </div>
                  )}

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
                  ].map((srv) => {
                    const srvConfig = { ...playingVideo, selectedServer: srv.id };
                    const srvUrl = getEmbedUrl(srvConfig);
                    const isVisible = selectedServer === srv.id;
                    
                    return (
                      <div
                        key={srv.id}
                        id={`container-${srv.id}`}
                        style={{ display: isVisible ? "block" : "none", width: "100%", height: "100%" }}
                      >
                        {isVisible && (
                          <iframe
                            id={`embed-${srv.id}`}
                            src={srvUrl}
                            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                            allowFullScreen
                            referrerPolicy="origin"
                            onLoad={() => setIframeLoading(false)}
                            style={{ width: "100%", height: "100%", border: "none" }}
                          />
                        )}
                      </div>
                    );
                  })}
                  {/* Floating Seek Controls overlay inside video player */}
                  <div className="in-player-controls-overlay">
                    <button className="in-player-seek-btn" onClick={() => handleSeek(-10)} title="Rewind 10s">
                      ⏪ -10s
                    </button>
                    <span className="in-player-time-display">
                      {currentPlayerTime ? `${Math.floor(currentPlayerTime / 60)}m ${Math.floor(currentPlayerTime % 60)}s` : "0:00"}
                      {currentPlayerDuration ? ` / ${Math.floor(currentPlayerDuration / 60)}m ${Math.floor(currentPlayerDuration % 60)}s` : ""}
                    </span>
                    <button className="in-player-seek-btn" onClick={() => handleSeek(10)} title="Forward 10s">
                      +10s ⏩
                    </button>
                  </div>
                </div>

                {/* Playback Error Help Banner */}
                <div style={{
                  background: "rgba(236, 72, 153, 0.08)",
                  border: "1px solid rgba(236, 72, 153, 0.25)",
                  borderRadius: "8px",
                  padding: "10px 16px",
                  marginTop: "12px",
                  fontSize: "0.85rem",
                  color: "#f472b6",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 0 10px rgba(236, 72, 153, 0.05)"
                }}>
                  <span style={{ fontSize: "1.2rem" }}>💡</span>
                  <span>
                    <strong>Getting a playback error?</strong> Try switching to another server (like <strong>VidSrc.to</strong>, <strong>VidSrc.me</strong>, or <strong>SuperEmbed</strong>) in the list below. Some servers may take longer or fail to resolve specific titles.
                  </span>
                </div>
                
                {/* Enhanced Player Controls Panel */}
                <div className="player-controls-panel glass-card">
                  {/* Player Controls Tab Bar */}
                  <div className="player-tabs-nav">
                    <button
                      type="button"
                      className={`player-tab-btn ${activePlayerTab === "servers" ? "active" : ""}`}
                      onClick={() => setActivePlayerTab("servers")}
                    >
                      ⚙️ Streams & Speed
                    </button>
                    {video.type === "tv" && (
                      <button
                        type="button"
                        className={`player-tab-btn ${activePlayerTab === "episodes" ? "active" : ""}`}
                        onClick={() => setActivePlayerTab("episodes")}
                      >
                        🗂 Episodes
                      </button>
                    )}
                    <button
                      type="button"
                      className={`player-tab-btn ${activePlayerTab === "about" ? "active" : ""}`}
                      onClick={() => setActivePlayerTab("about")}
                    >
                      ℹ️ Info
                    </button>
                  </div>

                  {/* Tab 1: Servers & Playback Speeds */}
                  {activePlayerTab === "servers" && (
                    <div className="player-tab-pane">
                       {/* Server Switcher */}
                      <div className="controls-row server-row">
                        <span className="control-label">Server:</span>
                        
                        <div className="server-desktop-container" style={{ flex: 1 }}>
                          <div className="server-pills">
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
                            ].map(srv => (
                              <button
                                key={srv.id}
                                type="button"
                                className={`server-pill-btn ${selectedServer === srv.id ? "active" : ""}`}
                                onClick={() => handleUpdatePlayerConfig({ selectedServer: srv.id })}
                              >
                                {srv.name}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="server-mobile-container" style={{ flex: 1 }}>
                          <select
                            className="episode-select-dropdown"
                            value={selectedServer}
                            onChange={(e) => handleUpdatePlayerConfig({ selectedServer: e.target.value })}
                            style={{ width: "100%" }}
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
                              <option key={srv.id} value={srv.id} style={{ background: "var(--bg-darker)", color: "var(--text-primary)" }}>
                                {srv.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        
                        {/* Ambient Aura Toggle */}
                        <button 
                          type="button"
                          className={`ambient-toggle-btn ${ambientGlowEnabled ? "active" : ""}`}
                          onClick={() => setAmbientGlowEnabled(!ambientGlowEnabled)}
                          title="Toggle Backlight Aura"
                        >
                          ✨ Aura: {ambientGlowEnabled ? "ON" : "OFF"}
                        </button>

                        {/* Ambient Aura Color Presets */}
                        {ambientGlowEnabled && (
                          <div className="aura-presets-pills" style={{ display: "flex", alignItems: "center", gap: "6px", marginLeft: "15px" }}>
                            <span className="control-label" style={{ minWidth: "auto", marginRight: "4px" }}>Preset:</span>
                            {[
                              { name: "Neon", color: "6366f1" },
                              { name: "Cyberpunk", color: "ec4899" },
                              { name: "Matrix", color: "10b981" },
                              { name: "Sunset", color: "f97316" },
                              { name: "DeepSea", color: "0ea5e9" }
                            ].map((preset) => (
                              <button
                                key={preset.name}
                                type="button"
                                className={`server-pill-btn ${playingVideo.themeColor === `#${preset.color}` ? "active" : ""}`}
                                onClick={() => handleUpdatePlayerConfig({ themeColor: `#${preset.color}` })}
                                style={{ 
                                  borderBottom: `2px solid #${preset.color}`,
                                  padding: "4px 8px",
                                  fontSize: "0.75rem"
                                }}
                              >
                                {preset.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Playback Speed Controls */}
                      <div className="controls-row speed-row" style={{ marginTop: "12px", borderTop: "none", paddingTop: "0" }}>
                        <span className="control-label">Speed:</span>
                        <div className="server-pills">
                          {[0.5, 1.0, 1.25, 1.5, 2.0].map(speed => (
                            <button
                              key={speed}
                              type="button"
                              className={`server-pill-btn ${playerSpeed === speed ? "active" : ""}`}
                              onClick={() => {
                                setPlayerSpeed(speed);
                                showToastNotification(`⚡ Playback speed set to ${speed}x`);
                                try {
                                  const iframe = document.getElementById(`embed-${playingVideo.selectedServer}`);
                                  if (iframe && iframe.contentWindow) {
                                    iframe.contentWindow.postMessage(JSON.stringify({ type: "SET_SPEED", data: { speed } }), "*");
                                  }
                                } catch (err) {}
                              }}
                            >
                              {speed === 1.0 ? "Normal" : `${speed}x`}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Episode Selector (Only for TV Shows) */}
                  {activePlayerTab === "episodes" && video.type === "tv" && (
                    <div className="player-tab-pane">
                      <div className="controls-row episode-row" style={{ borderBottom: "none", paddingBottom: "0" }}>
                        <button
                          type="button"
                          className="nav-episode-btn"
                          disabled={selectedEpisode <= 1}
                          onClick={() => handleUpdatePlayerConfig({ selectedEpisode: selectedEpisode - 1, progress: 0 })}
                        >
                          ◀ Previous Episode
                        </button>
                        
                        <div className="episode-selector-wrapper">
                          <span className="control-label">Ep:</span>
                          <select
                            className="episode-select-dropdown"
                            value={selectedEpisode}
                            onChange={(e) => handleUpdatePlayerConfig({ selectedEpisode: parseInt(e.target.value), progress: 0 })}
                          >
                            {Array.from({ length: totalEpisodes }).map((_, i) => (
                              <option key={i + 1} value={i + 1}>
                                Episode {i + 1}
                              </option>
                            ))}
                          </select>
                        </div>

                        <button
                          type="button"
                          className="nav-episode-btn"
                          disabled={selectedEpisode >= totalEpisodes}
                          onClick={() => handleUpdatePlayerConfig({ selectedEpisode: selectedEpisode + 1, progress: 0 })}
                        >
                          Next Episode ▶
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Tab 3: Metadata & About */}
                  {activePlayerTab === "about" && (
                    <div className="player-tab-pane">
                      <div className="player-details-row">
                        <div className="details-poster">
                          {video.poster && <img src={video.poster} alt={video.title} />}
                        </div>
                        <div className="details-info">
                          <div className="details-meta">
                            <span className="details-badge rating">⭐ {video.rating}</span>
                            <span className="details-badge year">{video.year}</span>
                            <span className="details-badge genre">{video.genres?.join(", ")}</span>
                          </div>
                          <p className="details-description">{video.description}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </>
        );
      })()}

      {/* Main Content Layout */}
      <main className="main-content" ref={mainContentRef} style={{ paddingBottom: "40px" }}
        onTouchStart={(e) => { touchStartY.current = e.touches[0].clientY; }}
        onTouchEnd={(e) => {
          if (touchStartY.current === null) return;
          const diff = e.changedTouches[0].clientY - touchStartY.current;
          touchStartY.current = null;
          if (diff > 100 && window.scrollY < 10 && currentTab === "dashboard") {
            handlePullRefresh();
          }
        }}
      >
        
        {/* Pull to Refresh Indicator */}
        {isPullRefreshing && (
          <div className="pull-indicator">
            <div className="pull-spinner" />
            Refreshing...
          </div>
        )}

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

            {/* Genre Chips Horizontal Scroll */}
            <div className="genre-chips-container">
              {GENRE_CHIPS.map(chip => (
                <button
                  key={chip}
                  className={`genre-chip ${selectedGenreChip === chip ? "active" : ""}`}
                  onClick={() => {
                    if (navigator.vibrate) navigator.vibrate(15);
                    setSelectedGenreChip(chip);
                  }}
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Watchlist Shelf */}
            {watchlist.length > 0 && (
              <section className="home-shelf" id="watchlist-shelf">
                <h2 className="shelf-title">❤️ My Watchlist</h2>
                <div className="horizontal-scroll">
                  {watchlist.map((v) => (
                    <VideoCard
                      key={`wl-${v.type}-${v.id}`}
                      video={v}
                      onSelectVideo={(video) => {
                        setActiveVideo(video);
                        setResumeOptions({});
                      }}
                      isWatchlisted={true}
                      onToggleWatchlist={toggleWatchlist}
                    />
                  ))}
                </div>
              </section>
            )}

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
                  {getGenreFilteredVideos(onePieceTV).map((v) => (
                    <VideoCard
                      key={`${v.type}-${v.id}`}
                      video={v}
                      onSelectVideo={(video) => {
                        setActiveVideo(video);
                        setResumeOptions({});
                      }}
                      isWatchlisted={isInWatchlist(v)}
                      onToggleWatchlist={toggleWatchlist}
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
                  {getGenreFilteredVideos(onePieceMovies).map((v) => (
                    <VideoCard
                      key={`${v.type}-${v.id}`}
                      video={v}
                      onSelectVideo={(video) => {
                        setActiveVideo(video);
                        setResumeOptions({});
                      }}
                      isWatchlisted={isInWatchlist(v)}
                      onToggleWatchlist={toggleWatchlist}
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
                  {getGenreFilteredVideos(demonSlayerTV).map((v) => (
                    <VideoCard
                      key={`${v.type}-${v.id}`}
                      video={v}
                      onSelectVideo={(video) => {
                        setActiveVideo(video);
                        setResumeOptions({});
                      }}
                      isWatchlisted={isInWatchlist(v)}
                      onToggleWatchlist={toggleWatchlist}
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
                  {getGenreFilteredVideos(demonSlayerMovies).map((v) => (
                    <VideoCard
                      key={`${v.type}-${v.id}`}
                      video={v}
                      onSelectVideo={(video) => {
                        setActiveVideo(video);
                        setResumeOptions({});
                      }}
                      isWatchlisted={isInWatchlist(v)}
                      onToggleWatchlist={toggleWatchlist}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Curated Shelf: Tamil Movies */}
            {tamilMovies.length > 0 && (
              <section className="home-shelf">
                <h2 className="shelf-title">🎥 Curated Tamil Movies</h2>
                <div className="horizontal-scroll">
                  {getGenreFilteredVideos(tamilMovies).map((v) => (
                    <VideoCard
                      key={`${v.type}-${v.id}`}
                      video={v}
                      onSelectVideo={(video) => {
                        setActiveVideo(video);
                        setResumeOptions({});
                      }}
                      isWatchlisted={isInWatchlist(v)}
                      onToggleWatchlist={toggleWatchlist}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Curated Shelf: Tamil Web Series */}
            {tamilTV.length > 0 && (
              <section className="home-shelf">
                <h2 className="shelf-title">📺 Curated Tamil Web Series</h2>
                <div className="horizontal-scroll">
                  {getGenreFilteredVideos(tamilTV).map((v) => (
                    <VideoCard
                      key={`${v.type}-${v.id}`}
                      video={v}
                      onSelectVideo={(video) => {
                        setActiveVideo(video);
                        setResumeOptions({});
                      }}
                      isWatchlisted={isInWatchlist(v)}
                      onToggleWatchlist={toggleWatchlist}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Curated Shelf: Premium Ullu & Alternatives */}
            {premiumAdultSeries.length > 0 && (
              <section className="home-shelf">
                <h2 className="shelf-title">🔞 Premium Ullu & Alternatives (Kooku, Rabbit, PrimeShots, ALTBalaji)</h2>
                <div className="horizontal-scroll">
                  {premiumAdultSeries.map((v) => (
                    <VideoCard
                      key={`${v.type}-${v.id}`}
                      video={v}
                      onSelectVideo={(video) => {
                        setActiveVideo(video);
                        setResumeOptions({});
                      }}
                      isWatchlisted={isInWatchlist(v)}
                      onToggleWatchlist={toggleWatchlist}
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

            {/* New on ADvera Shelf */}
            {newReleases.length > 0 && (
              <section className="home-shelf">
                <h2 className="shelf-title">🆕 New on ADvera (Last 30 Days)</h2>
                <div className="horizontal-scroll">
                  {newReleases.map((v) => (
                    <VideoCard
                      key={`new-${v.type}-${v.id}`}
                      video={v}
                      onSelectVideo={(video) => {
                        setActiveVideo(video);
                        setResumeOptions({});
                      }}
                      isWatchlisted={isInWatchlist(v)}
                      onToggleWatchlist={toggleWatchlist}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Trending Movies Shelf */}
            {trendingMovies.length > 0 && (
              <section className="home-shelf">
                <h2 className="shelf-title">🌟 Trending Movies</h2>
                <div className="horizontal-scroll">
                  {getGenreFilteredVideos(trendingMovies).map((v) => (
                    <VideoCard
                      key={`${v.type}-${v.id}`}
                      video={v}
                      onSelectVideo={(video) => {
                        setActiveVideo(video);
                        setResumeOptions({});
                      }}
                      isWatchlisted={isInWatchlist(v)}
                      onToggleWatchlist={toggleWatchlist}
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
                  {getGenreFilteredVideos(trendingTVShows).map((v) => (
                    <VideoCard
                      key={`${v.type}-${v.id}`}
                      video={v}
                      onSelectVideo={(video) => {
                        setActiveVideo(video);
                        setResumeOptions({});
                      }}
                      isWatchlisted={isInWatchlist(v)}
                      onToggleWatchlist={toggleWatchlist}
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
                  {getGenreFilteredVideos(trendingAnime).map((v) => (
                    <VideoCard
                      key={`${v.type}-${v.id}`}
                      video={v}
                      onSelectVideo={(video) => {
                        setActiveVideo(video);
                        setResumeOptions({});
                      }}
                      isWatchlisted={isInWatchlist(v)}
                      onToggleWatchlist={toggleWatchlist}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Trending Tamil Movies Shelf */}
            {trendingTamilMovies.length > 0 && (
              <section className="home-shelf">
                <h2 className="shelf-title">🔥 Trending Tamil Movies</h2>
                <div className="horizontal-scroll">
                  {getGenreFilteredVideos(trendingTamilMovies).map((v) => (
                    <VideoCard
                      key={`${v.type}-${v.id}`}
                      video={v}
                      onSelectVideo={(video) => {
                        setActiveVideo(video);
                        setResumeOptions({});
                      }}
                      isWatchlisted={isInWatchlist(v)}
                      onToggleWatchlist={toggleWatchlist}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Trending Tamil TV Shelf */}
            {trendingTamilTV.length > 0 && (
              <section className="home-shelf">
                <h2 className="shelf-title">📺 Popular Tamil Shows & Web Series</h2>
                <div className="horizontal-scroll">
                  {getGenreFilteredVideos(trendingTamilTV).map((v) => (
                    <VideoCard
                      key={`${v.type}-${v.id}`}
                      video={v}
                      onSelectVideo={(video) => {
                        setActiveVideo(video);
                        setResumeOptions({});
                      }}
                      isWatchlisted={isInWatchlist(v)}
                      onToggleWatchlist={toggleWatchlist}
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
              
              {/* Premium Filtering & Sorting Toolbar */}
              <div className="filter-toolbar glass-card">
                {/* Category Selection */}
                <div className="filter-item">
                  <label className="filter-label">Category</label>
                  <select
                    className="filter-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="All">All Categories</option>
                    <option value="movie">Movies</option>
                    <option value="tv">TV / Web Series</option>
                    <option value="Anime">Anime</option>
                    <option value="Adult">Adult / Erotic Series</option>
                  </select>
                </div>

                {/* Language Selection */}
                <div className="filter-item">
                  <label className="filter-label">Language</label>
                  <select
                    className="filter-select"
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                  >
                    <option value="All">All Languages</option>
                    <option value="Tamil">Tamil</option>
                    <option value="English">English</option>
                    <option value="Japanese">Japanese</option>
                  </select>
                </div>

                {/* Genre Selection */}
                <div className="filter-item">
                  <label className="filter-label">Genre</label>
                  <select
                    className="filter-select"
                    value={selectedGenre}
                    onChange={(e) => setSelectedGenre(e.target.value)}
                  >
                    <option value="All">All Genres</option>
                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Crime">Crime</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Animation">Animation</option>
                  </select>
                </div>

                {/* Sorting Selection */}
                <div className="filter-item sort-item">
                  <label className="filter-label">Sort By</label>
                  <select
                    className="filter-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="rating">Rating (Highest First)</option>
                    <option value="year-new">Release Year (Newest)</option>
                    <option value="year-old">Release Year (Oldest)</option>
                    <option value="title-az">Alphabetical (A - Z)</option>
                    <option value="title-za">Alphabetical (Z - A)</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Mobile filter button */}
            <div style={{ display: "none", padding: "0 24px 12px" }} className="mobile-filter-trigger">
              <button className="genre-chip active" onClick={() => setFilterDrawerOpen(true)} style={{ width: "100%", textAlign: "center" }}>
                🔍 Open Filters
              </button>
            </div>

            <div className="video-grid">
              {(() => {
                const list = getExploreList();
                const limited = list.slice(0, exploreLimit);
                if (list.length === 0) {
                  return (
                    <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "60px 20px", color: "var(--text-muted)" }}>
                      <span style={{ fontSize: "3rem", display: "block", marginBottom: "12px" }}>🔍</span>
                      <p style={{ fontSize: "1rem" }}>No results found in this category. Try a different query.</p>
                    </div>
                  );
                }
                return (
                  <>
                    {limited.map((v) => (
                      <VideoCard
                        key={`${v.type}-${v.id}`}
                        video={v}
                        onSelectVideo={(video) => {
                          setActiveVideo(video);
                          setResumeOptions({});
                        }}
                        isWatchlisted={isInWatchlist(v)}
                        onToggleWatchlist={toggleWatchlist}
                      />
                    ))}
                    {limited.length < list.length && (
                      <div className="infinite-scroll-loader">
                        <div className="infinite-scroll-spinner" />
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        )}

        {/* Tab: Watch History */}
        {currentTab === "history" && (
          <div className="tab-section active" style={{ padding: "24px" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "20px" }}>🕒 Watch History</h2>
            {continueWatching.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--text-muted)" }}>
                <span style={{ fontSize: "3rem", display: "block", marginBottom: "12px" }}>📺</span>
                <p>No watch history yet. Start watching something!</p>
              </div>
            ) : (
              <div className="history-grid">
                {continueWatching.map((h) => {
                  const meta = getBookmarkMetadata(h);
                  const percent = Math.min(100, Math.max(0, (h.currentTime / (h.duration || 1)) * 100));
                  return (
                    <div key={`hist-${h.id}`} className="history-card" onClick={() => {
                      setActiveVideo(meta);
                      setResumeOptions({ progress: Math.floor(h.currentTime || 0), season: h.season, episode: h.episode });
                    }}>
                      {meta.poster && <img src={meta.poster} alt={meta.title} />}
                      <div className="history-progress-bar">
                        <div className="history-progress-fill" style={{ width: `${percent}%` }} />
                      </div>
                      <div className="history-card-info">
                        <div className="history-card-title">{meta.title}</div>
                        <div className="history-card-sub">
                          {h.mediaType === "tv" ? `S${h.season} · Ep ${h.episode}` : "Movie"} · {Math.floor((h.currentTime || 0) / 60)}m watched
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
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
            theme={theme}
            onToggleTheme={toggleTheme}
            profiles={profiles}
            activeProfile={activeProfile}
            onSwitchProfile={() => setShowProfileSelector(true)}
            parentalPin={parentalPin}
            setParentalPin={setParentalPin}
            parentalEnabled={parentalEnabled}
            setParentalEnabled={setParentalEnabled}
            showToastNotification={showToastNotification}
            requests={requests}
            onRequestTitle={() => setShowRequestDrawer(true)}
          />
        )}
      </main>

      {/* Netflix Profile Selection Modal */}
      {showProfileSelector && (
        <div className="profile-selector-overlay">
          <div className="profile-selector-container">
            <h1 className="profile-selector-title">Who's watching?</h1>
            <div className="profile-grid">
              {profiles.map(p => (
                <div key={p.id} className="profile-card-wrapper">
                  <button className="profile-avatar-btn" onClick={() => {
                    setActiveProfile(p);
                    setShowProfileSelector(false);
                    if (navigator.vibrate) navigator.vibrate(20);
                    showToastNotification(`🍿 Welcome back, ${p.name}!`);
                  }}>
                    <span className="profile-avatar-emoji">{p.avatar}</span>
                    <span className="profile-avatar-name">{p.name}</span>
                  </button>
                  {p.id !== "p1" && (
                    <button className="profile-delete-btn" onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteProfile(p.id);
                    }} title="Delete Profile">✕</button>
                  )}
                </div>
              ))}
              {profiles.length < 5 && (
                <button className="profile-avatar-btn add-profile-btn" onClick={() => setProfileAddMode(true)}>
                  <span className="profile-avatar-emoji">+</span>
                  <span className="profile-avatar-name">Add Profile</span>
                </button>
              )}
            </div>
          </div>

          {profileAddMode && (
            <div className="profile-add-modal glass-card">
              <h3>Create Profile</h3>
              <div className="form-group" style={{ margin: "12px 0" }}>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Profile Name"
                  value={newProfileName}
                  onChange={(e) => setNewProfileName(e.target.value)}
                />
              </div>
              <div className="avatar-picker">
                <label className="form-label" style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Choose Avatar:</label>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", margin: "10px 0" }}>
                  {["🍿", "🎬", "🚀", "🎭", "🎮", "🦄", "🦖", "🍕", "🔥", "🐱"].map(av => (
                    <button
                      key={av}
                      className={`avatar-choice ${newProfileAvatar === av ? "active" : ""}`}
                      onClick={() => setNewProfileAvatar(av)}
                      style={{
                        fontSize: "1.6rem",
                        padding: "6px",
                        background: newProfileAvatar === av ? "rgba(255,255,255,0.15)" : "transparent",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        outline: "none"
                      }}
                    >
                      {av}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                <button className="btn btn-primary" onClick={handleCreateProfile}>Create</button>
                <button className="btn" style={{ background: "rgba(255,255,255,0.05)" }} onClick={() => {
                  setProfileAddMode(false);
                  setNewProfileName("");
                }}>Cancel</button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Parental PIN Challenge Modal */}
      {showPinModal && (
        <div className="pin-modal-overlay">
          <div className="pin-modal glass-card">
            <h2 style={{ textAlign: "center", marginBottom: "8px", fontSize: "1.4rem" }}>🔞 Restricted Content</h2>
            <p style={{ textAlign: "center", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "20px" }}>
              Enter your 4-digit parental control PIN to unlock.
            </p>
            
            <div className="pin-display" style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "25px" }}>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className={`pin-dot ${pinInput.length > i ? "filled" : ""}`} style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  border: "2px solid var(--primary)",
                  background: pinInput.length > i ? "var(--primary)" : "transparent",
                  transition: "all 0.15s ease"
                }} />
              ))}
            </div>
            
            <div className="pin-keypad" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", maxWidth: "240px", margin: "0 auto 20px" }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                <button key={num} className="pin-key" onClick={() => handlePinKey(num)} style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  fontSize: "1.3rem",
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  outline: "none",
                  transition: "background 0.2s"
                }}>
                  {num}
                </button>
              ))}
              <button className="pin-key pin-clear" onClick={() => setPinInput("")} style={{
                background: "rgba(239, 68, 68, 0.15)",
                border: "1px solid rgba(239, 68, 68, 0.2)",
                borderRadius: "50%",
                width: "60px",
                height: "60px",
                fontSize: "1.1rem",
                color: "#f87171",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                outline: "none"
              }}>
                C
              </button>
              <button className="pin-key" onClick={() => handlePinKey(0)} style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "50%",
                width: "60px",
                height: "60px",
                fontSize: "1.3rem",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                outline: "none"
              }}>
                0
              </button>
              <button className="pin-key pin-back" onClick={() => setPinInput(prev => prev.slice(0, -1))} style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "50%",
                width: "60px",
                height: "60px",
                fontSize: "1.1rem",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                outline: "none"
              }}>
                ⌫
              </button>
            </div>
            
            <button className="pin-cancel-btn" onClick={() => {
              setShowPinModal(false);
              setPinInput("");
              setPinChallengeCallback(null);
            }} style={{
              display: "block",
              width: "100%",
              padding: "10px",
              background: "transparent",
              border: "none",
              color: "var(--text-muted)",
              cursor: "pointer",
              fontSize: "0.9rem",
              textAlign: "center"
            }}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Title Request Drawer Bottom Sheet */}
      {showRequestDrawer && (
        <>
          <div className="filter-drawer-overlay" onClick={() => setShowRequestDrawer(false)} />
          <div className="filter-drawer title-request-drawer">
            <div className="filter-drawer-handle" />
            <h3>📢 Request Title</h3>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "15px" }}>
              Can't find a title? Submit a request and our search engine will index it.
            </p>
            
            <div className="form-group" style={{ marginBottom: "10px" }}>
              <label className="form-label" style={{ fontSize: "0.8rem" }}>Title Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Avengers: Endgame"
                value={requestName}
                onChange={(e) => setRequestName(e.target.value)}
              />
            </div>
            
            <div className="form-group" style={{ marginBottom: "10px" }}>
              <label className="form-label" style={{ fontSize: "0.8rem" }}>Media Type</label>
              <select className="form-input form-select" value={requestType} onChange={(e) => setRequestType(e.target.value)}>
                <option value="movie">Movie</option>
                <option value="tv">TV / Web Series</option>
                <option value="anime">Anime</option>
                <option value="adult">Adult</option>
              </select>
            </div>
            
            <div className="form-group" style={{ marginBottom: "10px" }}>
              <label className="form-label" style={{ fontSize: "0.8rem" }}>Release Year (Optional)</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. 2019"
                value={requestYear}
                onChange={(e) => setRequestYear(e.target.value)}
              />
            </div>
            
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label className="form-label" style={{ fontSize: "0.8rem" }}>Additional Notes</label>
              <textarea
                className="form-input"
                rows="2"
                placeholder="e.g. Dubbed in Tamil, or specific server request"
                value={requestNotes}
                onChange={(e) => setRequestNotes(e.target.value)}
                style={{ resize: "none" }}
              />
            </div>
            
            <button className="btn btn-primary" style={{ width: "100%", marginTop: "10px" }} onClick={handleSubmitRequest}>
              Submit Request
            </button>
          </div>
        </>
      )}

      {/* DetailModal Config overlay */}
      {activeVideo && (
        <DetailModal
          video={activeVideo}
          activeProfile={activeProfile}
          resumeOptions={resumeOptions}
          onClose={() => {
            setActiveVideo(null);
            setResumeOptions({});
          }}
          onPlay={handlePlayNow}
          tmdbApiKey={tmdbApiKey}
          onSelectVideo={(mappedVideo) => {
            setActiveVideo(mappedVideo);
            let foundProgress = {};
            if (activeProfile) {
              const savedProgress = localStorage.getItem(`progress-${activeProfile.id}-${mappedVideo.id}`);
              if (savedProgress) {
                try {
                  const parsed = JSON.parse(savedProgress);
                  foundProgress = {
                    progress: Math.floor(parsed.currentTime || 0),
                    season: parsed.season,
                    episode: parsed.episode
                  };
                } catch (e) {}
              }
            }
            setResumeOptions(foundProgress);
          }}
        />
      )}

      {/* Global Toast Alert Notification */}
      {toast && (
        <div className="toast-notification">
          {toast}
        </div>
      )}

      <footer className="app-footer">
        <p>&copy; 2026 ADvera. Premium streaming portal powered by Vidking Embed.</p>
      </footer>
    </div>
  );
}
