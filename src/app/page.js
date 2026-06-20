"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import VideoCard from "@/components/VideoCard";
import DetailModal from "@/components/DetailModal";
import Settings from "@/components/Settings";
import { ANIME_CATALOG, getGenresFromIds } from "@/lib/constants";

const getLanguageLabel = (lang, genres = []) => {
  if (lang === "ta" || (genres && genres.includes("Tamil"))) return "Tamil";
  if (lang === "ja" || (genres && genres.includes("Anime"))) return "Japanese";
  if (lang === "en" || lang === "EN") return "English";
  return lang ? lang.toUpperCase() : "English";
};

export default function Home() {
  const [currentTab, setCurrentTab] = useState("dashboard");
  const [siteId, setSiteId] = useState("12345");
  const [tmdbApiKey, setTmdbApiKey] = useState("44531997758615c4af0f1d7724b5819d");
  
  const [videos, setVideos] = useState(ANIME_CATALOG);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchDebounce, setSearchDebounce] = useState(null);
  
  // Advanced Filter & Sort states
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortBy, setSortBy] = useState("rating");

  const [activeVideo, setActiveVideo] = useState(null);
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
    if (searchDebounce) clearTimeout(searchDebounce);
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const timer = setTimeout(() => {
      // Auto redirect search query to Explore tab
      setCurrentTab("videos");
      setSelectedCategory("All");
      setSelectedLanguage("All");
      setSelectedGenre("All");

      // Local matching first
      const localResults = videos.filter((v) =>
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.description.toLowerCase().includes(searchQuery.toLowerCase())
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

  const getEmbedUrl = (playConfig) => {
    if (!playConfig || !playConfig.video) return "";
    const { video, selectedServer, selectedSeason, selectedEpisode, colorText, autoplay, nextEpisode, episodeSelector, progress } = playConfig;
    let url = "";
    
    if (selectedServer === "vidking") {
      const p = [];
      if (colorText && colorText.trim()) p.push(`color=${colorText.trim()}`);
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
    } else if (selectedServer === "vidsrc" || selectedServer === "vidsrc_xyz") {
      if (video.type === "tv") {
        url = `https://vidsrc.xyz/embed/tv/${video.id}/${selectedSeason}/${selectedEpisode}`;
      } else {
        url = `https://vidsrc.xyz/embed/movie/${video.id}`;
      }
    } else if (selectedServer === "vidsrc_to") {
      if (video.type === "tv") {
        url = `https://vidsrc.to/embed/tv/${video.id}/${selectedSeason}/${selectedEpisode}`;
      } else {
        url = `https://vidsrc.to/embed/movie/${video.id}`;
      }
    } else if (selectedServer === "rive") {
      if (video.type === "tv") {
        url = `https://api.rive.fm/embed/play?type=tv&id=${video.id}&season=${selectedSeason}&episode=${selectedEpisode}`;
      } else {
        url = `https://api.rive.fm/embed/play?type=movie&id=${video.id}`;
      }
    } else if (selectedServer === "vidsrc_cc") {
      if (video.type === "tv") {
        url = `https://vidsrc.cc/v2/embed/tv/${video.id}/${selectedSeason}/${selectedEpisode}`;
      } else {
        url = `https://vidsrc.cc/v2/embed/movie/${video.id}`;
      }
    } else if (selectedServer === "vidsrc_net") {
      if (video.type === "tv") {
        url = `https://vidsrc.net/embed/tv/${video.id}/${selectedSeason}/${selectedEpisode}`;
      } else {
        url = `https://vidsrc.net/embed/movie/${video.id}`;
      }
    } else if (selectedServer === "embed_rip") {
      if (video.type === "tv") {
        url = `https://embed.rip/tv/${video.id}/${selectedSeason}/${selectedEpisode}`;
      } else {
        url = `https://embed.rip/movie/${video.id}`;
      }
    } else if (selectedServer === "moviesapi") {
      if (video.type === "tv") {
        url = `https://moviesapi.club/tv/${video.id}-${selectedSeason}-${selectedEpisode}`;
      } else {
        url = `https://moviesapi.club/movie/${video.id}`;
      }
    } else if (selectedServer === "vidsrc_me") {
      if (video.type === "tv") {
        url = `https://vidsrc.me/embed/tv/${video.id}/${selectedSeason}/${selectedEpisode}`;
      } else {
        url = `https://vidsrc.me/embed/movie/${video.id}`;
      }
    } else if (selectedServer === "vidsrc_pro") {
      if (video.type === "tv") {
        url = `https://vidsrc.pro/embed/tv/${video.id}/${selectedSeason}/${selectedEpisode}`;
      } else {
        url = `https://vidsrc.pro/embed/movie/${video.id}`;
      }
    } else if (selectedServer === "embed_su") {
      if (video.type === "tv") {
        url = `https://embed.su/embed/tv/${video.id}/${selectedSeason}/${selectedEpisode}`;
      } else {
        url = `https://embed.su/embed/movie/${video.id}`;
      }
    } else if (selectedServer === "autoembed") {
      if (video.type === "tv") {
        url = `https://player.autoembed.co/tv/${video.id}/${selectedSeason}/${selectedEpisode}`;
      } else {
        url = `https://player.autoembed.co/movie/${video.id}`;
      }
    } else if (selectedServer === "vidsrc_in") {
      if (video.type === "tv") {
        url = `https://vidsrc.in/embed/tv/${video.id}/${selectedSeason}/${selectedEpisode}`;
      } else {
        url = `https://vidsrc.in/embed/movie/${video.id}`;
      }
    } else if (selectedServer === "smashystream") {
      if (video.type === "tv") {
        url = `https://embed.smashystream.com/playere.php?tmdb=${video.id}&season=${selectedSeason}&episode=${selectedEpisode}`;
      } else {
        url = `https://embed.smashystream.com/playere.php?tmdb=${video.id}`;
      }
    } else if (selectedServer === "twoembed") {
      if (video.type === "tv") {
        url = `https://www.2embed.cc/embedtv/${video.id}?s=${selectedSeason}&e=${selectedEpisode}`;
      } else {
        url = `https://www.2embed.cc/embed/${video.id}`;
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

  const handlePlayNow = (config) => {
    const color = config.colorText || localStorage.getItem("vidking-player-color") || "6366f1";
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
    setActiveVideo(null);
    setTimeout(() => {
      if (playerSectionRef.current) {
        playerSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
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
    setPlayingVideo(null);
  };

  const handleSurpriseMe = () => {
    if (!videos || videos.length === 0) return;
    
    showToastNotification("🎲 Spinning the movie wheel of fortune...");
    
    let spinCount = 0;
    const interval = setInterval(() => {
      const tempVideo = videos[Math.floor(Math.random() * videos.length)];
      setToast(`🎲 Checking: ${tempVideo.title}...`);
      spinCount++;
      if (spinCount >= 8) {
        clearInterval(interval);
        const finalVideo = videos[Math.floor(Math.random() * videos.length)];
        setToast(`✨ Winner: ${finalVideo.title}!`);
        setTimeout(() => {
          setActiveVideo(finalVideo);
          setResumeOptions({});
          showToastNotification(`🎯 Selected: ${finalVideo.title}`);
        }, 800);
      }
    }, 150);
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
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "title-za") {
      sorted.sort((a, b) => b.title.localeCompare(a.title));
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
                    { id: "vidking", name: "VidKing" }
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
                  {/* Server Switcher */}
                  <div className="controls-row server-row">
                    <span className="control-label">Server:</span>
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
                        { id: "vidking", name: "VidKing" }
                      ].map(srv => (
                        <button
                          key={srv.id}
                          className={`server-pill-btn ${selectedServer === srv.id ? "active" : ""}`}
                          onClick={() => handleUpdatePlayerConfig({ selectedServer: srv.id })}
                        >
                          {srv.name}
                        </button>
                      ))}
                    </div>
                    
                    {/* Ambient Aura Toggle */}
                    <button 
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

                  {/* Episode Navigation for TV series */}
                  {video.type === "tv" && (
                    <div className="controls-row episode-row">
                      <button
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
                        className="nav-episode-btn"
                        disabled={selectedEpisode >= totalEpisodes}
                        onClick={() => handleUpdatePlayerConfig({ selectedEpisode: selectedEpisode + 1, progress: 0 })}
                      >
                        Next Episode ▶
                      </button>
                    </div>
                  )}

                  {/* Metadata and Description */}
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
              </div>
            </section>
          </>
        );
      })()}

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

            {/* Curated Shelf: Tamil Movies */}
            {tamilMovies.length > 0 && (
              <section className="home-shelf">
                <h2 className="shelf-title">🎥 Curated Tamil Movies</h2>
                <div className="horizontal-scroll">
                  {tamilMovies.map((v) => (
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

            {/* Curated Shelf: Tamil Web Series */}
            {tamilTV.length > 0 && (
              <section className="home-shelf">
                <h2 className="shelf-title">📺 Curated Tamil Web Series</h2>
                <div className="horizontal-scroll">
                  {tamilTV.map((v) => (
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

            {/* Trending Tamil Movies Shelf */}
            {trendingTamilMovies.length > 0 && (
              <section className="home-shelf">
                <h2 className="shelf-title">🔥 Trending Tamil Movies</h2>
                <div className="horizontal-scroll">
                  {trendingTamilMovies.map((v) => (
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

            {/* Trending Tamil TV Shelf */}
            {trendingTamilTV.length > 0 && (
              <section className="home-shelf">
                <h2 className="shelf-title">📺 Popular Tamil Shows & Web Series</h2>
                <div className="horizontal-scroll">
                  {trendingTamilTV.map((v) => (
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
