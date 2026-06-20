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
  },

  // ===== TAMIL MOVIES & WEB SERIES =====
  {
    id: 940551,
    title: "Leo",
    type: "movie",
    poster: "https://image.tmdb.org/t/p/w500/tfw569v37792Qz1K45922Qz1K45.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/tfw569v37792Qz1K45922Qz1K45.jpg",
    year: "2023",
    rating: "7.5",
    genres: ["Tamil", "Action", "Thriller"],
    description: "Parthiban is a mild-mannered cafe owner in Kotagiri, who becomes a local hero after rescue operations. However, his actions draw the attention of a notorious drug cartel who believe he is Leo Das, the estranged son of a powerful gang lord."
  },
  {
    id: 940721,
    title: "Jailer",
    type: "movie",
    poster: "https://image.tmdb.org/t/p/w500/qy1POlC45e7yXk2aU0sA1yV5jD8.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/qy1POlC45e7yXk2aU0sA1yV5jD8.jpg",
    year: "2023",
    rating: "7.2",
    genres: ["Tamil", "Action", "Comedy", "Crime"],
    description: "Muthuvel Pandian, a retired prison jailer, goes on a manhunt to find his son's killers. However, his path leads him into the dark underworld of art smuggling and gang violence."
  },
  {
    id: 868158,
    title: "Vikram",
    type: "movie",
    poster: "https://image.tmdb.org/t/p/w500/t7Dldw7H0t701hZz16x4k9V7Dld.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/t7Dldw7H0t701hZz16x4k9V7Dld.jpg",
    year: "2022",
    rating: "7.7",
    genres: ["Tamil", "Action", "Thriller"],
    description: "A special agent investigates a series of murders committed by a masked group of vigilantes. The investigation leads him to a massive drug cartel and a legendary black-ops commander who went missing years ago."
  },
  {
    id: 204095,
    title: "Suzhal: The Vortex",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/o7Dldw7H0t701hZz16x4k9V7Dld.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/o7Dldw7H0t701hZz16x4k9V7Dld.jpg",
    year: "2022",
    rating: "7.9",
    genres: ["Tamil", "Crime", "Mystery", "Drama"],
    description: "In a small industrial town in Tamil Nadu, the disappearance of a young girl coinciding with a factory fire triggers a massive investigation. Secrets unravel as the police and residents are pulled into a dark vortex.",
    seasons: [{ season: 1, episodes: 8 }]
  },
  {
    id: 110468,
    title: "Charmsukh",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/8OLspAmOl4IqQTFbi5c5FA4toVl.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/zaOiEILOGZ4kfYoVMMhDdMoce3j.jpg",
    year: "2019",
    rating: "6.8",
    genres: ["Ullu", "Drama", "Romance"],
    description: "Charmsukh is an Indian erotic drama web series showcasing multiple romantic stories of passion, love, and intimacy.",
    seasons: [{ season: 1, episodes: 24 }]
  },
  {
    id: 104616,
    title: "Kavita Bhabhi",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/8OLspAmOl4IqQTFbi5c5FA4toVl.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/zaOiEILOGZ4kfYoVMMhDdMoce3j.jpg",
    year: "2020",
    rating: "6.5",
    genres: ["Ullu", "Drama"],
    description: "Kavita Bhabhi is an Indian web series showcasing stories of a charming woman who counsels lovers and handles desires.",
    seasons: [{ season: 1, episodes: 12 }]
  },
  {
    id: 115290,
    title: "Palang Tod",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/rtM1bYqvd0QwtKhgLTLn4tUsOz3.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/wNbWEiIkJbLY3wtC4RAJTzIkPRW.jpg",
    year: "2020",
    rating: "6.4",
    genres: ["Ullu", "Drama"],
    description: "Palang Tod is an Indian anthology series focusing on human desires, relationship dilemmas, and complex household bonds.",
    seasons: [{ season: 1, episodes: 18 }]
  },
  {
    id: 136014,
    title: "Lolita House",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/1ywG4Gk3hUskA26U45iE720eZwt.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/f7sWk3W7DqS3uRkZcQ6R7998H3.jpg",
    year: "2021",
    rating: "6.7",
    genres: ["Kooku", "Drama", "Romance"],
    description: "Lolita House is an Indian web series focusing on complex relationships, passions, and human desires in a shared house.",
    seasons: [{ season: 1, episodes: 8 }]
  },
  {
    id: 114217,
    title: "Suno Devar Ji",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/7WsyCh6ZliRmqggRISTi52Y0w3k.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/7WsyCh6ZliRmqggRISTi52Y0w3k.jpg",
    year: "2020",
    rating: "6.5",
    genres: ["Kooku", "Drama"],
    description: "Suno Devar Ji is an Indian erotic drama web series showcasing multiple stories of relationships and household bonds.",
    seasons: [{ season: 1, episodes: 6 }]
  },
  {
    id: 201103,
    title: "Jalebi Bai",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/rtM1bYqvd0QwtKhgLTLn4tUsOz3.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/wNbWEiIkJbLY3wtC4RAJTzIkPRW.jpg",
    year: "2022",
    rating: "6.8",
    genres: ["Rabbit", "Drama", "Comedy"],
    description: "Jalebi Bai is a comedy-drama series revolving around a domestic helper who handles desires and tasks in various households.",
    seasons: [{ season: 1, episodes: 10 }]
  },
  {
    id: 208573,
    title: "Mrs Teacher",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/8OLspAmOl4IqQTFbi5c5FA4toVl.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/zaOiEILOGZ4kfYoVMMhDdMoce3j.jpg",
    year: "2022",
    rating: "6.9",
    genres: ["PrimeShots", "Drama", "Romance"],
    description: "Mrs Teacher is a romance drama series about a charming teacher who becomes the focus of attention in a local neighborhood.",
    seasons: [{ season: 1, episodes: 8 }]
  },
  {
    id: 79247,
    title: "Gandii Baat",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/rtM1bYqvd0QwtKhgLTLn4tUsOz3.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/wNbWEiIkJbLY3wtC4RAJTzIkPRW.jpg",
    year: "2018",
    rating: "7.1",
    genres: ["ALTBalaji", "HotShots", "Drama", "Romance"],
    description: "Gandii Baat is an Indian anthology web series showcasing stories of relationship dilemmas, passion, and desires across rural India.",
    seasons: [{ season: 1, episodes: 4 }, { season: 2, episodes: 5 }, { season: 3, episodes: 4 }, { season: 4, episodes: 5 }, { season: 5, episodes: 4 }, { season: 6, episodes: 2 }, { season: 7, episodes: 4 }]
  },
  {
    id: 102279,
    title: "Mastram",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/8OLspAmOl4IqQTFbi5c5FA4toVl.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/zaOiEILOGZ4kfYoVMMhDdMoce3j.jpg",
    year: "2020",
    rating: "7.2",
    genres: ["Hot Masti", "Drama", "Romance"],
    description: "Mastram is a writer of erotic literature whose stories capture the imagination of the public in 1980s India.",
    seasons: [{ season: 1, episodes: 10 }]
  },
  {
    id: 210000,
    title: "Boom Erotic Stories",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/1ywG4Gk3hUskA26U45iE720eZwt.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/f7sWk3W7DqS3uRkZcQ6R7998H3.jpg",
    year: "2022",
    rating: "6.3",
    genres: ["Boom Movies", "Drama"],
    description: "Intimate and passionate romantic drama stories showcasing human desires and bonds.",
    seasons: [{ season: 1, episodes: 8 }]
  },
  {
    id: 220000,
    title: "WooW Originals",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/7WsyCh6ZliRmqggRISTi52Y0w3k.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/7WsyCh6ZliRmqggRISTi52Y0w3k.jpg",
    year: "2021",
    rating: "6.5",
    genres: ["WooW", "Drama", "Romance"],
    description: "A selection of modern romantic series focusing on the beauty of young love and intimacy.",
    seasons: [{ season: 1, episodes: 6 }]
  },
  {
    id: 230000,
    title: "Klikk Bengali Hits",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/1ywG4Gk3hUskA26U45iE720eZwt.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/f7sWk3W7DqS3uRkZcQ6R7998H3.jpg",
    year: "2023",
    rating: "6.8",
    genres: ["Klikk", "Drama", "Mystery"],
    description: "Klikk Bengali Movies & Web Series featuring thrilling drama and romantic tension.",
    seasons: [{ season: 1, episodes: 8 }]
  },
  {
    id: 240000,
    title: "Hr OTT Web Series",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/8OLspAmOl4IqQTFbi5c5FA4toVl.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/zaOiEILOGZ4kfYoVMMhDdMoce3j.jpg",
    year: "2022",
    rating: "6.1",
    genres: ["Hr OTT", "Drama"],
    description: "Anthology series highlighting romantic and social situations with high dramatic tension.",
    seasons: [{ season: 1, episodes: 5 }]
  },
  {
    id: 250000,
    title: "Hot Next Shows",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/rtM1bYqvd0QwtKhgLTLn4tUsOz3.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/wNbWEiIkJbLY3wtC4RAJTzIkPRW.jpg",
    year: "2023",
    rating: "6.4",
    genres: ["Hot Next", "Drama", "Romance"],
    description: "Captivating and modern romance stories tailored for young audiences.",
    seasons: [{ season: 1, episodes: 6 }]
  },
  {
    id: 260000,
    title: "X Prime Originals",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/1ywG4Gk3hUskA26U45iE720eZwt.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/f7sWk3W7DqS3uRkZcQ6R7998H3.jpg",
    year: "2021",
    rating: "6.2",
    genres: ["X Prime", "Drama"],
    description: "Original series depicting urban lifestyles, intense relationships, and passion.",
    seasons: [{ season: 1, episodes: 8 }]
  },
  {
    id: 270000,
    title: "Hot Sutra Series",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/7WsyCh6ZliRmqggRISTi52Y0w3k.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/7WsyCh6ZliRmqggRISTi52Y0w3k.jpg",
    year: "2022",
    rating: "6.0",
    genres: ["Hot Sutra", "Drama", "Romance"],
    description: "Seductive tales of romance, hidden desires, and modern relationship dynamics.",
    seasons: [{ season: 1, episodes: 4 }]
  },
  {
    id: 280000,
    title: "Hotshot Prime Shorts",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/8OLspAmOl4IqQTFbi5c5FA4toVl.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/zaOiEILOGZ4kfYoVMMhDdMoce3j.jpg",
    year: "2022",
    rating: "6.6",
    genres: ["Hotshot Prime", "Drama"],
    description: "Premium short movies and web series focusing on suspense and emotional connections.",
    seasons: [{ season: 1, episodes: 12 }]
  },
  {
    id: 290000,
    title: "Hokyo Hindi Series",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/rtM1bYqvd0QwtKhgLTLn4tUsOz3.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/wNbWEiIkJbLY3wtC4RAJTzIkPRW.jpg",
    year: "2020",
    rating: "6.7",
    genres: ["Hokyo", "Drama", "Romance"],
    description: "Award-winning Hindi web series exploring deep human emotions, drama, and romance.",
    seasons: [{ season: 1, episodes: 8 }]
  },
  {
    id: 300000,
    title: "Paraflixx Thrillers",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/1ywG4Gk3hUskA26U45iE720eZwt.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/f7sWk3W7DqS3uRkZcQ6R7998H3.jpg",
    year: "2021",
    rating: "6.9",
    genres: ["Paraflixx", "Drama", "Mystery"],
    description: "Mysterious thriller web series that keep you on the edge of your seat with dramatic twists.",
    seasons: [{ season: 1, episodes: 6 }]
  },
  {
    id: 310000,
    title: "UrbanflixTV Dramas",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/7WsyCh6ZliRmqggRISTi52Y0w3k.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/7WsyCh6ZliRmqggRISTi52Y0w3k.jpg",
    year: "2023",
    rating: "7.0",
    genres: ["UrbanflixTV", "Drama"],
    description: "Sensational urban drama web series focusing on friendships, love, and life challenges.",
    seasons: [{ season: 1, episodes: 10 }]
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
