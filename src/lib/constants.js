export const ANIME_CATALOG = [
  // ===== ONE PIECE SERIES & MOVIES =====
  {
    id: 37854,
    title: "One Piece",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/x52v515gJaNqbv9uH6g563rOIu7.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/4t06sk225gV5Z224c6n78rOI7v.jpg",
    year: "1999",
    rating: "8.7",
    genres: ["Anime", "Action", "Adventure", "Fantasy"],
    description: "Years ago, the legendary Pirate King Gol D. Roger was executed, leaving behind a massive treasure known as the 'One Piece'. Young Monkey D. Luffy sets sail with his crew, the Straw Hat Pirates, to find the treasure and become the new Pirate King.",
    seasons: [{ season: 1, episodes: 1100 }] // Fallback value, will fetch actual episodes if API key is present
  },
  {
    id: 900667,
    title: "One Piece Film: Red",
    type: "movie",
    poster: "https://image.tmdb.org/t/p/w500/ogZTo54Gmg5p2dfz4FI1m1m5W5L.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/ogZTo54Gmg5p2dfz4FI1m1m5W5L.jpg",
    year: "2022",
    rating: "7.9",
    genres: ["Anime", "Animation", "Action", "Adventure", "Fantasy"],
    description: "Uta — the most beloved singer in the world. Her voice, which she sings with while concealing her true identity, has been described as 'otherworldly'. She will appear in public for the first time at a live concert."
  },
  {
    id: 568012,
    title: "One Piece: Stampede",
    type: "movie",
    poster: "https://image.tmdb.org/t/p/w500/d6A3Xv9b27OI9gKzQcRSR85r71n.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/d6A3Xv9b27OI9gKzQcRSR85r71n.jpg",
    year: "2019",
    rating: "8.0",
    genres: ["Anime", "Animation", "Action", "Adventure"],
    description: "Luffy and his Straw Hat Pirate Crew receive an invitation to the Pirate Festival, a massive world expo of pirates, by pirates, for pirates."
  },
  {
    id: 361292,
    title: "One Piece Film: Gold",
    type: "movie",
    poster: "https://image.tmdb.org/t/p/w500/8404K9b3H8w6b6w9H8w8B9w8H8.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/8404K9b3H8w6b6w9H8w8B9w8H8.jpg",
    year: "2016",
    rating: "7.4",
    genres: ["Anime", "Animation", "Action", "Adventure", "Fantasy"],
    description: "The Straw Hat Pirates arrive at Gran Tesoro, a massive independent entertainment city-ship ruled by the wealthy Gild Tesoro."
  },

  // ===== DEMON SLAYER SERIES & MOVIES =====
  {
    id: 85937,
    title: "Demon Slayer: Kimetsu no Yaiba",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/nTvM0mhUrnN2v34VzLV6Kj17uEv.jpg",
    year: "2019",
    rating: "8.7",
    genres: ["Anime", "Animation", "Action", "Adventure", "Fantasy"],
    description: "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. Tanjiro resolves to become a 'demon slayer' so that he can turn his sister back into a human.",
    seasons: [
      { season: 1, episodes: 26 }, { season: 2, episodes: 18 },
      { season: 3, episodes: 11 }, { season: 4, episodes: 8 }
    ]
  },
  {
    id: 635302,
    title: "Demon Slayer: Mugen Train",
    type: "movie",
    poster: "https://image.tmdb.org/t/p/w500/h8g63wL9tPk5z17lVx7EeSgj7io.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/h8g63wL9tPk5z17lVx7EeSgj7io.jpg",
    year: "2020",
    rating: "8.4",
    genres: ["Anime", "Animation", "Action", "Fantasy"],
    description: "Tanjirō Kamado and his companions from the Demon Slayer Corps accompany Kyōjurō Rengoku, the Flame Hashira, to investigate a mysterious series of disappearances aboard a train."
  },
  {
    id: 1216221,
    title: "Demon Slayer: To the Hashira Training",
    type: "movie",
    poster: "https://image.tmdb.org/t/p/w500/x5Zp9m1Nl8Wb9U5R0N0sO4Z1D7B.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/x5Zp9m1Nl8Wb9U5R0N0sO4Z1D7B.jpg",
    year: "2024",
    rating: "7.7",
    genres: ["Anime", "Animation", "Action", "Fantasy"],
    description: "A theatrical compilation featuring Episode 11 of the Swordsmith Village Arc and Episode 1 of the Hashira Training Arc."
  }
];

export const TMDB_GENRES = {
  28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime",
  99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History",
  27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Sci-Fi",
  10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western",
  10759: "Action & Adventure", 10762: "Kids", 10763: "News", 10764: "Reality",
  10765: "Sci-Fi & Fantasy", 10766: "Soap", 10767: "Talk", 10768: "War & Politics"
};

export function getGenresFromIds(ids, originCountries = []) {
  if (!ids || !ids.length) return ["Unknown"];
  const list = ids.map(id => TMDB_GENRES[id]).filter(Boolean);
  if (ids.includes(16) && originCountries && originCountries.some(c => c === 'JP')) {
    if (!list.includes("Anime")) list.push("Anime");
  }
  return list.length ? list : ["Generic"];
}
