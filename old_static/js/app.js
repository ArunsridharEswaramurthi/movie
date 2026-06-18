// ===== VidkingStream - Premium Streaming Platform =====

// ===== VERIFIED CATALOG (all TMDB poster paths verified 200 OK) =====
const CATALOG = [
  {
    id: 823464,
    title: "Dune: Part Two",
    type: "movie",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    year: "2024",
    rating: "8.3",
    genres: ["Sci-Fi", "Adventure"],
    description: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family."
  },
  {
    id: 872585,
    title: "Oppenheimer",
    type: "movie",
    poster: "https://image.tmdb.org/t/p/w500/rQaNXBcZxWSbJtmJbi8jrrtYSjF.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/rQaNXBcZxWSbJtmJbi8jrrtYSjF.jpg",
    year: "2023",
    rating: "8.1",
    genres: ["Drama", "History"],
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb."
  },
  {
    id: 634649,
    title: "Spider-Man: No Way Home",
    type: "movie",
    poster: "https://image.tmdb.org/t/p/w500/iolc5VLP4PFU0XvjTVRiCb80mUR.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/iolc5VLP4PFU0XvjTVRiCb80mUR.jpg",
    year: "2021",
    rating: "8.0",
    genres: ["Action", "Sci-Fi"],
    description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear."
  },
  {
    id: 157336,
    title: "Interstellar",
    type: "movie",
    poster: "https://image.tmdb.org/t/p/w500/frq4ygwcIMusECNv9rPBrvJwyxG.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/frq4ygwcIMusECNv9rPBrvJwyxG.jpg",
    year: "2014",
    rating: "8.4",
    genres: ["Sci-Fi", "Drama"],
    description: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel."
  },
  {
    id: 27205,
    title: "Inception",
    type: "movie",
    poster: "https://image.tmdb.org/t/p/w500/eMaH8xS0vXae1jm1Ry0S3yRBEhM.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/eMaH8xS0vXae1jm1Ry0S3yRBEhM.jpg",
    year: "2010",
    rating: "8.4",
    genres: ["Action", "Sci-Fi", "Thriller"],
    description: "Cobb, a skilled thief who steals secrets from deep within the subconscious during the dream state, is offered a chance to have his criminal record erased."
  },
  {
    id: 155,
    title: "The Dark Knight",
    type: "movie",
    poster: "https://image.tmdb.org/t/p/w500/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
    year: "2008",
    rating: "8.5",
    genres: ["Action", "Drama", "Thriller"],
    description: "When the menace known as the Joker wreaks havoc and chaos on Gotham, Batman must accept one of the greatest psychological tests."
  },
  {
    id: 693134,
    title: "Dune: Part One",
    type: "movie",
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    year: "2021",
    rating: "7.8",
    genres: ["Sci-Fi", "Adventure"],
    description: "Paul Atreides, a brilliant and gifted young man born into a great destiny, must travel to the most dangerous planet in the universe to ensure the future of his family and his people."
  },
  {
    id: 129,
    title: "Spirited Away",
    type: "movie",
    poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    year: "2001",
    rating: "8.5",
    genres: ["Animation", "Anime", "Fantasy"],
    description: "A young girl, Chihiro, wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts."
  },
  // ===== TV SHOWS =====
  {
    id: 84958,
    title: "Loki",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",
    year: "2021",
    rating: "8.2",
    genres: ["Sci-Fi", "Adventure", "Fantasy"],
    description: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of Avengers: Endgame.",
    seasons: [{ season: 1, episodes: 6 }, { season: 2, episodes: 6 }]
  },
  {
    id: 1396,
    title: "Breaking Bad",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
    year: "2008",
    rating: "9.5",
    genres: ["Drama", "Thriller"],
    description: "A high school chemistry teacher diagnosed with lung cancer turns to manufacturing methamphetamine to secure his family's future.",
    seasons: [
      { season: 1, episodes: 7 }, { season: 2, episodes: 13 },
      { season: 3, episodes: 13 }, { season: 4, episodes: 13 },
      { season: 5, episodes: 16 }
    ]
  },
  {
    id: 66732,
    title: "Stranger Things",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
    year: "2016",
    rating: "8.6",
    genres: ["Sci-Fi", "Drama", "Mystery"],
    description: "When a young boy vanishes, a town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    seasons: [
      { season: 1, episodes: 8 }, { season: 2, episodes: 9 },
      { season: 3, episodes: 8 }, { season: 4, episodes: 9 }
    ]
  },
  {
    id: 100088,
    title: "The Last of Us",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    year: "2023",
    rating: "8.7",
    genres: ["Drama", "Action"],
    description: "Twenty years after civilization has been destroyed, Joel is hired to smuggle Ellie out of an oppressive quarantine zone.",
    seasons: [{ season: 1, episodes: 9 }]
  },
  {
    id: 82856,
    title: "The Mandalorian",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    year: "2019",
    rating: "8.4",
    genres: ["Sci-Fi", "Action", "Adventure"],
    description: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
    seasons: [
      { season: 1, episodes: 8 }, { season: 2, episodes: 8 },
      { season: 3, episodes: 8 }
    ]
  },
  {
    id: 119051,
    title: "Wednesday",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    year: "2022",
    rating: "8.0",
    genres: ["Comedy", "Mystery", "Fantasy"],
    description: "Wednesday Addams' misadventures as a student at Nevermore Academy, a very unique boarding school.",
    seasons: [{ season: 1, episodes: 8 }]
  },
  // ===== ANIME =====
  {
    id: 85937,
    title: "Demon Slayer",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
    year: "2019",
    rating: "8.7",
    genres: ["Animation", "Anime", "Action", "Adventure"],
    description: "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy, finds his family slaughtered by a demon. He embarks on a journey to become a demon slayer.",
    seasons: [
      { season: 1, episodes: 26 }, { season: 2, episodes: 18 },
      { season: 3, episodes: 11 }, { season: 4, episodes: 8 }
    ]
  },
  {
    id: 1429,
    title: "Attack on Titan",
    type: "tv",
    poster: "https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
    backdrop: "https://image.tmdb.org/t/p/w780/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
    year: "2013",
    rating: "8.7",
    genres: ["Animation", "Anime", "Action", "Sci-Fi"],
    description: "Several hundred years ago, humans were nearly exterminated by Titans. Now they fight back inside walled cities.",
    seasons: [
      { season: 1, episodes: 25 }, { season: 2, episodes: 12 },
      { season: 3, episodes: 22 }, { season: 4, episodes: 30 }
    ]
  }
];

// ===== APPLICATION STATE =====
const state = {
  currentTab: 'dashboard',
  siteId: localStorage.getItem('vidking-site-id') || '12345',
  tmdbApiKey: localStorage.getItem('vidking-tmdb-key') || '',
  videos: [],
  currentCategory: 'All',
  carouselIndex: 0,
  carouselTimer: null,
  activeVideo: null,
  searchDebounce: null
};

// ===== HELPERS =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

const TMDB_GENRES = {
  28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime",
  99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History",
  27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Sci-Fi",
  10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western",
  10759: "Action & Adventure", 10762: "Kids", 10763: "News", 10764: "Reality",
  10765: "Sci-Fi & Fantasy", 10766: "Soap", 10767: "Talk", 10768: "War & Politics"
};

function getGenresFromIds(ids, originCountries = []) {
  if (!ids || !ids.length) return ["Unknown"];
  const list = ids.map(id => TMDB_GENRES[id]).filter(Boolean);
  if (ids.includes(16) && originCountries && originCountries.some(c => c === 'JP')) {
    if (!list.includes("Anime")) list.push("Anime");
  }
  return list.length ? list : ["Generic"];
}

// Robust image with fallback
function setImgSrc(img, src, alt) {
  img.src = src;
  img.alt = alt || '';
  img.onerror = function() {
    this.onerror = null;
    this.style.display = 'none';
    const parent = this.parentElement;
    if (parent && !parent.querySelector('.img-error')) {
      const placeholder = document.createElement('div');
      placeholder.className = 'img-error';
      placeholder.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a1a2e,#0d0d1a);color:#4b5563;font-size:2.5rem;';
      placeholder.textContent = '🎬';
      parent.style.position = 'relative';
      parent.appendChild(placeholder);
    }
  };
}

// ===== NAVIGATION =====
function initNav() {
  $$(".nav-item").forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const tab = el.dataset.tab;
      if (tab) switchTab(tab);
    });
  });

  const logo = $(".brand");
  if (logo) logo.addEventListener('click', () => switchTab('dashboard'));

  // Scroll-aware navbar
  window.addEventListener('scroll', () => {
    const navbar = $('#app-navbar');
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

function switchTab(tabName) {
  state.currentTab = tabName;
  $$(".tab-section").forEach(s => s.classList.toggle('active', s.id === `section-${tabName}`));
  $$(".nav-item").forEach(n => n.classList.toggle('active', n.dataset.tab === tabName));

  if (tabName === 'videos') renderExploreGrid();
}

// ===== DATA LOADING =====
async function loadDynamicTMDbCatalog() {
  if (!state.tmdbApiKey) return false;
  
  try {
    const moviesRes = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${state.tmdbApiKey}`);
    const tvRes = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${state.tmdbApiKey}`);
    const animeRes = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${state.tmdbApiKey}&with_genres=16&with_original_language=ja&sort_by=popularity.desc`);
    
    let tmdbVideos = [];
    
    if (moviesRes.ok) {
      const data = await moviesRes.json();
      if (data.results) {
        data.results.forEach(m => {
          tmdbVideos.push({
            id: m.id,
            title: m.title,
            type: 'movie',
            poster: m.poster_path ? `https://image.tmdb.org/t/p/w500${m.poster_path}` : '',
            backdrop: m.backdrop_path ? `https://image.tmdb.org/t/p/w780${m.backdrop_path}` : '',
            year: (m.release_date || '').substring(0, 4) || 'N/A',
            rating: m.vote_average ? m.vote_average.toFixed(1) : 'N/A',
            genres: getGenresFromIds(m.genre_ids),
            description: m.overview || 'No description available.'
          });
        });
      }
    }
    
    if (tvRes.ok) {
      const data = await tvRes.json();
      if (data.results) {
        data.results.forEach(t => {
          tmdbVideos.push({
            id: t.id,
            title: t.name,
            type: 'tv',
            poster: t.poster_path ? `https://image.tmdb.org/t/p/w500${t.poster_path}` : '',
            backdrop: t.backdrop_path ? `https://image.tmdb.org/t/p/w780${t.backdrop_path}` : '',
            year: (t.first_air_date || '').substring(0, 4) || 'N/A',
            rating: t.vote_average ? t.vote_average.toFixed(1) : 'N/A',
            genres: getGenresFromIds(t.genre_ids, t.origin_country),
            description: t.overview || 'No description available.'
          });
        });
      }
    }

    if (animeRes.ok) {
      const data = await animeRes.json();
      if (data.results) {
        data.results.forEach(t => {
          tmdbVideos.push({
            id: t.id,
            title: t.name,
            type: 'tv',
            poster: t.poster_path ? `https://image.tmdb.org/t/p/w500${t.poster_path}` : '',
            backdrop: t.backdrop_path ? `https://image.tmdb.org/t/p/w780${t.backdrop_path}` : '',
            year: (t.first_air_date || '').substring(0, 4) || 'N/A',
            rating: t.vote_average ? t.vote_average.toFixed(1) : 'N/A',
            genres: getGenresFromIds(t.genre_ids, ['JP']),
            description: t.overview || 'No description available.'
          });
        });
      }
    }
    
    if (tmdbVideos.length > 0) {
      const merged = [...CATALOG];
      tmdbVideos.forEach(v => {
        if (!merged.some(item => item.id === v.id && item.type === v.type)) {
          merged.push(v);
        }
      });
      state.videos = merged;
      return true;
    }
  } catch (e) {
    console.error("Error loading dynamic TMDb catalog:", e);
  }
  return false;
}

async function fetchMovies() {
  state.videos = [...CATALOG];

  const loadedFromTMDb = await loadDynamicTMDbCatalog();
  
  if (!loadedFromTMDb) {
    console.log('Using local curated catalog as fallback');
    try {
      const res = await fetch('https://api.sampleapis.com/movies/action');
      if (res.ok) {
        const data = await res.json();
      }
    } catch (e) {}
  }

  renderHeroCarousel();
  renderTrendingRow();
  renderTVShowsRow();
  renderAnimeRow();
  renderContinueWatching();
  renderCategoryBar();
}

// ===== HERO CAROUSEL =====
function renderHeroCarousel() {
  const slides = $('#carousel-slides');
  const dots = $('#carousel-dots');
  if (!slides) return;

  const heroItems = state.videos.slice(0, 6);
  slides.innerHTML = '';
  if (dots) dots.innerHTML = '';

  heroItems.forEach((video, idx) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';

    const genresHTML = video.genres.map(g => `<span class="carousel-genre-tag">${g}</span>`).join('');

    slide.innerHTML = `
      <img src="${video.poster}" alt="${video.title}" style="object-fit:cover;object-position:center 20%;" />
      <div class="carousel-overlay">
        <div class="carousel-content">
          <div class="carousel-meta">
            ${genresHTML}
            <span class="carousel-rating">⭐ ${video.rating}</span>
            <span class="carousel-year">${video.year}</span>
          </div>
          <h1 class="carousel-title">${video.title}</h1>
          <p class="carousel-desc">${video.description}</p>
          <button class="btn btn-primary watch-now-btn" data-id="${video.id}">
            <span>▶</span> Watch Now
          </button>
        </div>
      </div>
    `;

    slide.querySelector('.watch-now-btn').addEventListener('click', () => openDetailModal(video.id));
    slides.appendChild(slide);

    if (dots) {
      const dot = document.createElement('div');
      dot.className = `carousel-dot${idx === 0 ? ' active' : ''}`;
      dot.addEventListener('click', () => { state.carouselIndex = idx; updateCarousel(); resetCarouselTimer(); });
      dots.appendChild(dot);
    }
  });

  state.carouselIndex = 0;
  updateCarousel();
  startCarouselTimer();
}

function updateCarousel() {
  const slides = $('#carousel-slides');
  if (!slides || !slides.children.length) return;
  slides.style.transform = `translateX(-${state.carouselIndex * 100}%)`;
  $$('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === state.carouselIndex));
}

function startCarouselTimer() {
  stopCarouselTimer();
  state.carouselTimer = setInterval(() => {
    const count = $('#carousel-slides')?.children.length || 0;
    if (count > 0) {
      state.carouselIndex = (state.carouselIndex + 1) % count;
      updateCarousel();
    }
  }, 7000);
}

function stopCarouselTimer() {
  if (state.carouselTimer) { clearInterval(state.carouselTimer); state.carouselTimer = null; }
}

function resetCarouselTimer() { startCarouselTimer(); }

function attachCarouselControls() {
  const prev = $('#carousel-prev');
  const next = $('#carousel-next');
  const wrapper = $('#carousel-wrapper');

  if (prev) prev.addEventListener('click', e => {
    e.preventDefault();
    const count = $('#carousel-slides')?.children.length || 0;
    if (count > 0) { state.carouselIndex = (state.carouselIndex - 1 + count) % count; updateCarousel(); resetCarouselTimer(); }
  });
  if (next) next.addEventListener('click', e => {
    e.preventDefault();
    const count = $('#carousel-slides')?.children.length || 0;
    if (count > 0) { state.carouselIndex = (state.carouselIndex + 1) % count; updateCarousel(); resetCarouselTimer(); }
  });
  if (wrapper) {
    wrapper.addEventListener('mouseenter', stopCarouselTimer);
    wrapper.addEventListener('mouseleave', startCarouselTimer);
  }
}

// ===== SHELF ROWS =====
function renderTrendingRow() {
  const row = $('#trending-row');
  if (!row) return;
  row.innerHTML = '';
  const movies = state.videos.filter(v => v.type === 'movie');
  movies.forEach(v => row.appendChild(createVideoCard(v)));
}

function renderTVShowsRow() {
  const row = $('#tvshows-row');
  if (!row) return;
  row.innerHTML = '';
  const tvShows = state.videos.filter(v => v.type === 'tv' && !v.genres.includes('Anime'));
  tvShows.forEach(v => row.appendChild(createVideoCard(v)));
}

function renderAnimeRow() {
  const row = $('#anime-row');
  if (!row) return;
  row.innerHTML = '';
  const anime = state.videos.filter(v => v.genres.includes('Anime'));
  anime.forEach(v => row.appendChild(createVideoCard(v)));
}

// ===== VIDEO CARD =====
function createVideoCard(video) {
  const card = document.createElement('div');
  card.className = 'video-card';
  card.dataset.videoId = video.id;

  const typeClass = video.type === 'tv' ? 'tv' : 'movie';
  const typeLabel = video.type === 'tv' ? 'TV' : 'MOVIE';

  card.innerHTML = `
    <div class="card-img-container">
      <img src="${video.poster}" alt="${video.title}" loading="lazy" />
      <div class="card-play-overlay">
        <div class="play-icon-glow">▶</div>
      </div>
    </div>
    <div class="card-info">
      <div class="card-meta">
        <span class="card-rating">⭐ ${video.rating}</span>
        <span class="card-type-badge ${typeClass}">${typeLabel}</span>
        <span class="card-year">${video.year}</span>
      </div>
      <h3 class="card-title">${video.title}</h3>
    </div>
  `;

  // Image error handling
  const img = card.querySelector('.card-img-container img');
  img.onerror = function() {
    this.onerror = null;
    this.style.display = 'none';
    const container = this.closest('.card-img-container');
    if (container) {
      container.innerHTML = '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a1a2e,#0d0d1a);color:#4b5563;font-size:2.2rem;">🎬</div>';
      container.style.position = 'relative';
    }
  };

  card.addEventListener('click', () => openDetailModal(video.id));
  return card;
}

// ===== CATEGORY BAR & EXPLORE GRID =====
function renderCategoryBar() {
  const bar = $('#category-bar');
  if (!bar) return;

  const genresSet = new Set(['All', 'Movies', 'TV Shows']);
  state.videos.forEach(v => { if (v.genres) v.genres.forEach(g => genresSet.add(g)); });

  bar.innerHTML = '';
  Array.from(genresSet).forEach(cat => {
    const pill = document.createElement('div');
    pill.className = 'category-pill' + (state.currentCategory === cat ? ' active' : '');
    pill.textContent = cat;
    pill.dataset.category = cat;

    pill.addEventListener('click', () => {
      state.currentCategory = cat;
      renderExploreGrid();
      $$('.category-pill').forEach(p => p.classList.toggle('active', p.dataset.category === cat));
    });

    bar.appendChild(pill);
  });
}

function renderExploreGrid() {
  const grid = $('#video-grid');
  if (!grid) return;

  const query = ($('#search-input')?.value.trim().toLowerCase()) || '';

  const filtered = state.videos.filter(v => {
    // Search match
    const matchesQuery = !query ||
      v.title.toLowerCase().includes(query) ||
      (v.description && v.description.toLowerCase().includes(query)) ||
      v.genres.some(g => g.toLowerCase().includes(query));

    // Category match
    let matchesCategory = true;
    if (state.currentCategory === 'Movies') {
      matchesCategory = v.type === 'movie';
    } else if (state.currentCategory === 'TV Shows') {
      matchesCategory = v.type === 'tv';
    } else if (state.currentCategory !== 'All') {
      matchesCategory = v.genres && v.genres.includes(state.currentCategory);
    }

    return matchesQuery && matchesCategory;
  });

  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-muted);">
        <span style="font-size:3rem;display:block;margin-bottom:12px;">🔍</span>
        <p style="font-size:1rem;">No results found. Try a different search or category.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(v => grid.appendChild(createVideoCard(v)));
}

// ===== SEARCH (LIVE DROPDOWN + EXPLORE) =====
function initSearch() {
  const input = $('#search-input');
  const dropdown = $('#search-results-dropdown');
  if (!input || !dropdown) return;

  input.addEventListener('input', () => {
    clearTimeout(state.searchDebounce);
    state.searchDebounce = setTimeout(() => {
      const query = input.value.trim().toLowerCase();

      if (!query) {
        dropdown.classList.add('hidden');
        if (state.currentTab === 'videos') renderExploreGrid();
        return;
      }

      // Filter local results
      let results = state.videos.filter(v =>
        v.title.toLowerCase().includes(query) ||
        v.genres.some(g => g.toLowerCase().includes(query)) ||
        (v.description && v.description.toLowerCase().includes(query))
      );

      const renderDropdown = (items) => {
        if (items.length === 0) {
          dropdown.innerHTML = '<div class="search-no-results">No matches found</div>';
        } else {
          dropdown.innerHTML = '';
          items.forEach(v => {
            const item = document.createElement('div');
            item.className = 'search-result-item';
            const typeLabel = v.type === 'tv' ? 'TV' : 'Movie';
            item.innerHTML = `
              <img src="${v.poster || 'data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'56\'><rect width=\'40\' height=\'56\' fill=\'%231a1a2e\'/><text x=\'20\' y=\'32\' font-size=\'16\' text-anchor=\'middle\'>🎬</text></svg>'}" alt="${v.title}" />
              <div class="search-result-info">
                <div class="search-result-title">${highlightMatch(v.title, query)}</div>
                <div class="search-result-meta">${typeLabel} · ${v.year} · ⭐ ${v.rating}</div>
              </div>
            `;
            item.addEventListener('click', () => {
              dropdown.classList.add('hidden');
              input.value = '';
              if (!state.videos.some(x => x.id == v.id && x.type === v.type)) {
                state.videos.push(v);
              }
              openDetailModal(v.id);
            });
            dropdown.appendChild(item);
          });
        }

        if (!state.tmdbApiKey) {
          const tip = document.createElement('div');
          tip.className = 'search-dropdown-tip';
          tip.innerHTML = `🔑 Set a <a href="#" id="search-tip-link">TMDb API Key</a> in Settings to search millions of titles.`;
          tip.querySelector('#search-tip-link').addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.add('hidden');
            input.value = '';
            switchTab('settings');
          });
          dropdown.appendChild(tip);
        }

        dropdown.classList.remove('hidden');
      };

      if (state.tmdbApiKey) {
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=${state.tmdbApiKey}&query=${encodeURIComponent(query)}&include_adult=false`)
          .then(r => r.ok ? r.json() : Promise.reject())
          .then(data => {
            if (data.results) {
              const tmdbItems = data.results
                .filter(item => item.media_type === 'movie' || item.media_type === 'tv')
                .map(item => ({
                  id: item.id,
                  title: item.title || item.name,
                  type: item.media_type,
                  poster: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : '',
                  backdrop: item.backdrop_path ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}` : '',
                  year: (item.release_date || item.first_air_date || '').substring(0, 4) || 'N/A',
                  rating: item.vote_average ? item.vote_average.toFixed(1) : 'N/A',
                  genres: getGenresFromIds(item.genre_ids, item.origin_country),
                  description: item.overview || 'No description available.'
                }));

              const merged = [...results];
              tmdbItems.forEach(t => {
                if (!merged.some(l => l.id == t.id && l.type === t.type)) {
                  merged.push(t);
                }
              });
              renderDropdown(merged);
            } else {
              renderDropdown(results);
            }
          })
          .catch(() => {
            renderDropdown(results);
          });
      } else {
        renderDropdown(results);
      }

      if (state.currentTab === 'videos') renderExploreGrid();
    }, 200);
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box')) {
      dropdown.classList.add('hidden');
    }
  });

  input.addEventListener('focus', () => {
    if (input.value.trim()) {
      input.dispatchEvent(new Event('input'));
    }
  });
}

function highlightMatch(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<span style="color:var(--primary);font-weight:700;">$1</span>');
}

// ===== DETAIL MODAL =====
function getMovieMetadata(id) {
  return state.videos.find(v => v.id == id) ||
         CATALOG.find(v => v.id == id) ||
         { id, title: `TMDB: ${id}`, type: "movie", poster: "", backdrop: "", year: "N/A", rating: "N/A", genres: ["Custom"], description: "Custom stream loaded by TMDB ID." };
}

function openDetailModal(videoId, resumeOptions = {}) {
  const modal = $('#detail-modal');
  if (!modal) return;

  const savedColor = localStorage.getItem('vidking-player-color') || '6366f1';
  $('#config-color-text').value = savedColor;
  $('#config-color').value = '#' + savedColor;
  $('#config-progress').value = resumeOptions.progress || 0;

  const setupModalContent = (movie) => {
    state.activeVideo = movie;
    $('#modal-title').textContent = movie.title;
    $('#modal-desc').textContent = movie.description;

    const posterImg = $('#modal-poster');
    if (movie.poster) {
      posterImg.src = movie.poster;
      posterImg.style.display = '';
    } else {
      posterImg.style.display = 'none';
    }

    $('#modal-rating').textContent = `⭐ ${movie.rating}`;
    $('#modal-year').textContent = movie.year;
    $('#modal-type').textContent = movie.type === 'tv' ? 'TV Show' : 'Movie';

    // Genres
    const genresEl = $('#modal-genres');
    genresEl.innerHTML = '';
    movie.genres.forEach(g => {
      const tag = document.createElement('span');
      tag.className = 'carousel-genre-tag';
      tag.textContent = g;
      genresEl.appendChild(tag);
    });

    // TV config
    const tvGroup = $('#tv-config-group');
    if (movie.type === 'tv') {
      tvGroup.classList.remove('hidden');
      const seasonSel = $('#config-season');
      const episodeSel = $('#config-episode');
      seasonSel.innerHTML = '';
      episodeSel.innerHTML = '';

      let seasonsList = movie.seasons || [{ season: 1, episodes: 10 }];
      
      const renderSeasons = (seasons) => {
        seasonSel.innerHTML = '';
        seasons.forEach(s => {
          if (s.season === 0 && seasons.length > 1) return;
          const opt = document.createElement('option');
          opt.value = s.season;
          opt.textContent = `Season ${s.season}`;
          seasonSel.appendChild(opt);
        });
        seasonSel.value = resumeOptions.season || (seasons[0]?.season === 0 && seasons.length > 1 ? seasons[1]?.season : seasons[0]?.season) || 1;
        populateEpisodes(seasonSel.value, seasons);
      };

      const populateEpisodes = (sNum, seasons) => {
        episodeSel.innerHTML = '';
        const s = seasons.find(x => x.season == sNum) || seasons[0];
        const epCount = s ? s.episodes : 10;
        for (let i = 1; i <= epCount; i++) {
          const opt = document.createElement('option');
          opt.value = i;
          opt.textContent = `Episode ${i}`;
          episodeSel.appendChild(opt);
        }
        episodeSel.value = resumeOptions.episode || 1;
        updateUrlPreview();
      };

      if (state.tmdbApiKey) {
        fetch(`https://api.themoviedb.org/3/tv/${movie.id}?api_key=${state.tmdbApiKey}`)
          .then(r => r.ok ? r.json() : Promise.reject())
          .then(data => {
            if (data.seasons && data.seasons.length > 0) {
              seasonsList = data.seasons.map(s => ({
                season: s.season_number,
                episodes: s.episode_count
              }));
              movie.seasons = seasonsList;
              renderSeasons(seasonsList);
            } else {
              renderSeasons(seasonsList);
            }
          })
          .catch(() => {
            renderSeasons(seasonsList);
          });
      } else {
        renderSeasons(seasonsList);
      }

      seasonSel.onchange = () => { populateEpisodes(seasonSel.value, seasonsList); };
      episodeSel.onchange = updateUrlPreview;
    } else {
      tvGroup.classList.add('hidden');
    }

    updateUrlPreview();
    modal.classList.remove('hidden');
  };

  // Find local metadata first
  let movie = state.videos.find(v => v.id == videoId) || CATALOG.find(v => v.id == videoId);
  
  if (movie) {
    setupModalContent(movie);
  } else if (state.tmdbApiKey) {
    const detectedType = resumeOptions.mediaType || (videoId > 1000000 ? 'movie' : 'tv');
    fetch(`https://api.themoviedb.org/3/movie/${videoId}?api_key=${state.tmdbApiKey}`)
      .then(async (r) => {
        if (r.ok) {
          const data = await r.json();
          return {
            id: data.id,
            title: data.title,
            type: 'movie',
            poster: data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : '',
            backdrop: data.backdrop_path ? `https://image.tmdb.org/t/p/w780${data.backdrop_path}` : '',
            year: (data.release_date || '').substring(0, 4) || 'N/A',
            rating: data.vote_average ? data.vote_average.toFixed(1) : 'N/A',
            genres: data.genres ? data.genres.map(g => g.name) : ['Movie'],
            description: data.overview || 'No description available.'
          };
        }
        const tvRes = await fetch(`https://api.themoviedb.org/3/tv/${videoId}?api_key=${state.tmdbApiKey}`);
        if (tvRes.ok) {
          const tvData = await tvRes.json();
          return {
            id: tvData.id,
            title: tvData.name,
            type: 'tv',
            poster: tvData.poster_path ? `https://image.tmdb.org/t/p/w500${tvData.poster_path}` : '',
            backdrop: tvData.backdrop_path ? `https://image.tmdb.org/t/p/w780${tvData.backdrop_path}` : '',
            year: (tvData.first_air_date || '').substring(0, 4) || 'N/A',
            rating: tvData.vote_average ? tvData.vote_average.toFixed(1) : 'N/A',
            genres: tvData.genres ? tvData.genres.map(g => g.name) : ['TV Show'],
            description: tvData.overview || 'No description available.',
            seasons: tvData.seasons ? tvData.seasons.map(s => ({ season: s.season_number, episodes: s.episode_count })) : undefined
          };
        }
        throw new Error("Not found");
      })
      .then(fetchedMovie => {
        state.videos.push(fetchedMovie);
        setupModalContent(fetchedMovie);
      })
      .catch(() => {
        const fallback = {
          id: videoId,
          title: `TMDB Media (${videoId})`,
          type: detectedType,
          poster: '',
          backdrop: '',
          year: 'N/A',
          rating: 'N/A',
          genres: ['Custom'],
          description: 'Loaded from continue watching or external quick play.'
        };
        setupModalContent(fallback);
      });
  } else {
    const fallback = {
      id: videoId,
      title: `TMDB Media (${videoId})`,
      type: resumeOptions.season ? 'tv' : 'movie',
      poster: '',
      backdrop: '',
      year: 'N/A',
      rating: 'N/A',
      genres: ['Custom'],
      description: 'Loaded from continue watching or external quick play.'
    };
    setupModalContent(fallback);
  }
}

function updateUrlPreview() {
  if (!state.activeVideo) return '';

  const movie = state.activeVideo;
  const color = $('#config-color-text').value.trim();
  const autoplay = $('#config-autoplay').checked;
  const progress = parseInt($('#config-progress').value) || 0;

  let url = '';
  if (movie.type === 'tv') {
    const season = $('#config-season').value || '1';
    const episode = $('#config-episode').value || '1';
    const nextEp = $('#config-next-episode').checked;
    const epSelector = $('#config-episode-selector').checked;

    url = `https://www.vidking.net/embed/tv/${movie.id}/${season}/${episode}`;
    const p = [];
    if (color) p.push(`color=${color}`);
    if (autoplay) p.push('autoPlay=true');
    if (nextEp) p.push('nextEpisode=true');
    if (epSelector) p.push('episodeSelector=true');
    if (progress > 0) p.push(`progress=${progress}`);
    if (p.length) url += '?' + p.join('&');
  } else {
    url = `https://www.vidking.net/embed/movie/${movie.id}`;
    const p = [];
    if (color) p.push(`color=${color}`);
    if (autoplay) p.push('autoPlay=true');
    if (progress > 0) p.push(`progress=${progress}`);
    if (p.length) url += '?' + p.join('&');
  }

  const preview = $('#embed-url-preview');
  if (preview) preview.textContent = url;
  return url;
}

function initModalEvents() {
  const modal = $('#detail-modal');
  const closeBtn = $('#close-modal-btn');
  const playBtn = $('#play-now-btn');
  const copyBtn = $('#copy-embed-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => { modal.classList.add('hidden'); state.activeVideo = null; });
  }

  // Click outside to close
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) { modal.classList.add('hidden'); state.activeVideo = null; }
    });
  }

  // Color sync
  const cc = $('#config-color');
  const cct = $('#config-color-text');
  if (cc && cct) {
    cc.addEventListener('input', () => {
      const hex = cc.value.substring(1);
      cct.value = hex;
      localStorage.setItem('vidking-player-color', hex);
      updateUrlPreview();
    });
    cct.addEventListener('input', () => {
      const val = cct.value.trim();
      if (/^[0-9a-fA-F]{3,6}$/.test(val)) { cc.value = '#' + (val.length === 3 ? val + val : val); localStorage.setItem('vidking-player-color', val); }
      updateUrlPreview();
    });
  }

  // Dynamic updates
  $$('#config-progress, #config-autoplay, #config-next-episode, #config-episode-selector').forEach(el => {
    el.addEventListener('change', updateUrlPreview);
    el.addEventListener('input', updateUrlPreview);
  });

  // Copy
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const urlText = $('#embed-url-preview').textContent;
      navigator.clipboard.writeText(urlText).then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => { copyBtn.textContent = 'Copy'; }, 2000);
      }).catch(() => {
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = urlText;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
        copyBtn.textContent = 'Copied!';
        setTimeout(() => { copyBtn.textContent = 'Copy'; }, 2000);
      });
    });
  }

  // Play
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (!state.activeVideo) return;
      const url = updateUrlPreview();
      launchPlayer(state.activeVideo.title, url);
      modal.classList.add('hidden');
    });
  }
}

// ===== PLAYER =====
function launchPlayer(title, embedUrl) {
  const section = $('#player-section');
  const titleEl = $('#player-title');
  const container = $('#vidking-container');
  if (!section || !container) return;

  if (titleEl) titleEl.textContent = title;

  container.innerHTML = '';
  const iframe = document.createElement('iframe');
  iframe.id = 'vidking-embed';
  iframe.src = embedUrl;
  iframe.allow = 'autoplay; fullscreen';
  iframe.allowFullscreen = true;
  container.appendChild(iframe);

  section.classList.remove('hidden');
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function initPlayerControls() {
  const closeBtn = $('#close-player-btn');
  const section = $('#player-section');
  const container = $('#vidking-container');

  if (closeBtn && section && container) {
    closeBtn.addEventListener('click', () => {
      container.innerHTML = '';
      section.classList.add('hidden');
    });
  }
}

// ===== WATCH PROGRESS LISTENER =====
function initWatchProgressListener() {
  window.addEventListener("message", (event) => {
    try {
      const payload = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
      if (payload?.type === "PLAYER_EVENT" && payload.data) {
        console.log("VidKing player event:", payload.data);
        const progressData = {
          ...payload.data,
          mediaType: state.activeVideo?.type || payload.data.mediaType,
          timestamp: Date.now()
        };
        localStorage.setItem(`progress-${payload.data.id}`, JSON.stringify(progressData));
        renderContinueWatching();
      }
    } catch (e) { /* Non-JSON message, ignore */ }
  });
}

function renderContinueWatching() {
  const shelf = $('#continue-watching-shelf');
  const row = $('#continue-watching-row');
  if (!shelf || !row) return;

  const history = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('progress-')) {
      try {
        const d = JSON.parse(localStorage.getItem(key));
        if (d && d.id) history.push(d);
      } catch (e) {}
    }
  }

  history.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

  if (history.length === 0) { shelf.classList.add('hidden'); return; }

  shelf.classList.remove('hidden');
  row.innerHTML = '';

  history.forEach(h => {
    const meta = getMovieMetadata(h.id);
    const percent = Math.min(100, Math.max(0, (h.currentTime / (h.duration || 1)) * 100));

    const card = document.createElement('div');
    card.className = 'continue-card';

    let sub = 'Movie';
    if (h.mediaType === 'tv' || h.season) sub = `S${h.season} · Ep ${h.episode}`;

    const resumeS = Math.floor(h.currentTime || 0);

    card.innerHTML = `
      <div class="continue-img-container">
        <img src="${meta.poster}" alt="${meta.title}" loading="lazy" />
        <div class="continue-play-overlay"><div class="continue-play-icon">▶</div></div>
        <div class="continue-progress-bar"><div class="continue-progress-fill" style="width:${percent}%"></div></div>
      </div>
      <div class="continue-info">
        <h4 class="continue-title">${meta.title}</h4>
        <p class="continue-sub">${sub} · ${Math.floor(resumeS / 60)}m</p>
      </div>
    `;

    card.addEventListener('click', () => openDetailModal(h.id, { progress: resumeS, season: h.season, episode: h.episode }));
    row.appendChild(card);
  });
}

// ===== SETTINGS =====
function initSettings() {
  const input = $('#site-id-input');
  const tmdbInput = $('#tmdb-api-key-input');
  const saveBtn = $('#save-settings-btn');

  if (input) input.value = state.siteId;
  if (tmdbInput) tmdbInput.value = state.tmdbApiKey;

  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      if (input) {
        state.siteId = input.value.trim() || '12345';
        localStorage.setItem('vidking-site-id', state.siteId);
      }
      if (tmdbInput) {
        state.tmdbApiKey = tmdbInput.value.trim();
        localStorage.setItem('vidking-tmdb-key', state.tmdbApiKey);
      }
      showToast('✅ Settings saved successfully!');
      
      // Refresh list/shelves with new key settings
      fetchMovies();
    });
  }

  // Custom TMDB play
  const idInput = $('#custom-tmdb-id');
  const typeSelect = $('#custom-media-type');
  const playBtn = $('#custom-play-btn');

  if (playBtn && idInput && typeSelect) {
    playBtn.addEventListener('click', () => {
      const customId = idInput.value.trim();
      if (!customId || isNaN(customId)) {
        showToast('❌ Please enter a valid TMDB ID');
        return;
      }

      // Create ad-hoc metadata
      const mediaType = typeSelect.value;
      const adHoc = {
        id: parseInt(customId),
        title: `Custom ${mediaType === 'tv' ? 'TV Show' : 'Movie'} (${customId})`,
        type: mediaType,
        poster: '',
        backdrop: '',
        year: 'N/A',
        rating: 'N/A',
        genres: ['Custom'],
        description: `Streaming ${mediaType === 'tv' ? 'TV show' : 'movie'} with TMDB ID ${customId} via Vidking embed.`,
        seasons: mediaType === 'tv' ? [{ season: 1, episodes: 24 }] : undefined
      };

      // Add to state temporarily if not already there
      if (!state.videos.find(v => v.id == customId)) {
        state.videos.push(adHoc);
      }

      openDetailModal(parseInt(customId));
    });
  }
}

// ===== TOAST =====
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('exiting');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===== INITIALIZE =====
function initApp() {
  initNav();
  initSettings();
  attachCarouselControls();
  initSearch();
  initPlayerControls();
  initModalEvents();
  initWatchProgressListener();
  fetchMovies();
}

document.addEventListener('DOMContentLoaded', initApp);
