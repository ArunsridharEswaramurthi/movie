export const getLanguageLabel = (lang, genres = []) => {
  if (lang === "ta" || (genres && genres.includes("Tamil"))) return "Tamil";
  if (lang === "ja" || (genres && genres.includes("Anime"))) return "Japanese";
  if (lang === "en" || lang === "EN") return "English";
  return lang ? lang.toUpperCase() : "English";
};

export const getAmbientGlowColor = (video) => {
  if (!video) return "#6366f1";
  const genres = video.genres || [];
  if (genres.includes("Horror") || genres.includes("Thriller") || genres.includes("Crime")) return "#ef4444";
  if (genres.includes("Sci-Fi") || genres.includes("Fantasy")) return "#a855f7";
  if (genres.includes("Romance") || genres.includes("Drama")) return "#ec4899";
  if (genres.includes("Action") || genres.includes("Adventure")) return "#f97316";
  if (genres.includes("Anime") || genres.includes("Animation") || genres.includes("Japanese")) return "#14b8a6";
  if (genres.includes("Comedy")) return "#eab308";
  return "#6366f1";
};

export const getEmbedUrl = (playConfig) => {
  if (!playConfig || !playConfig.video) return "";
  const {
    video,
    selectedServer,
    selectedSeason,
    selectedEpisode,
    colorText,
    autoplay,
    nextEpisode,
    episodeSelector,
    progress
  } = playConfig;
  
  let url = "";
  const colorStr = colorText ? String(colorText).trim() : "";
  
  if (selectedServer === "vidking") {
    const p = [];
    if (colorStr) p.push(`color=${colorStr}`);
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
  } else if (selectedServer === "tamil") {
    // Official anyembed.xyz embed format:
    // Movie: /embed/tmdb-movie-{id}
    // TV:    /embed/tmdb-tv-{id}-{season}-{episode}
    const themeParam = colorStr ? `theme=%23${colorStr}` : "theme=purple";
    if (video.type === "tv") {
      url = `https://anyembed.xyz/embed/tmdb-tv-${video.id}-${selectedSeason}-${selectedEpisode}?${themeParam}&logo=false`;
    } else {
      url = `https://anyembed.xyz/embed/tmdb-movie-${video.id}?${themeParam}&logo=false`;
    }
  }
  return url;
};
