import assert from "assert";
import { getLanguageLabel, getAmbientGlowColor, getEmbedUrl } from "./src/lib/utils.js";
import { getGenresFromIds } from "./src/lib/constants.js";

const tests = [];

function test(name, fn) {
  tests.push({ name, fn });
}

// ==========================================
// 1. getLanguageLabel Unit Tests
// ==========================================
test("getLanguageLabel returns 'Tamil' for 'ta'", () => {
  assert.strictEqual(getLanguageLabel("ta"), "Tamil");
});

test("getLanguageLabel returns 'Tamil' if 'Tamil' genre is present", () => {
  assert.strictEqual(getLanguageLabel("en", ["Action", "Tamil"]), "Tamil");
});

test("getLanguageLabel returns 'Japanese' for 'ja'", () => {
  assert.strictEqual(getLanguageLabel("ja"), "Japanese");
});

test("getLanguageLabel returns 'Japanese' if 'Anime' genre is present", () => {
  assert.strictEqual(getLanguageLabel("en", ["Anime"]), "Japanese");
});

test("getLanguageLabel returns 'English' for 'en' or 'EN'", () => {
  assert.strictEqual(getLanguageLabel("en"), "English");
  assert.strictEqual(getLanguageLabel("EN"), "English");
});

test("getLanguageLabel returns uppercase code for other languages", () => {
  assert.strictEqual(getLanguageLabel("hi"), "HI");
  assert.strictEqual(getLanguageLabel("fr"), "FR");
});

test("getLanguageLabel defaults to 'English' if lang is missing", () => {
  assert.strictEqual(getLanguageLabel(undefined), "English");
});

// ==========================================
// 2. getAmbientGlowColor Unit Tests
// ==========================================
test("getAmbientGlowColor returns deep red for Horror/Thriller/Crime", () => {
  assert.strictEqual(getAmbientGlowColor({ genres: ["Horror"] }), "#ef4444");
  assert.strictEqual(getAmbientGlowColor({ genres: ["Thriller"] }), "#ef4444");
  assert.strictEqual(getAmbientGlowColor({ genres: ["Crime"] }), "#ef4444");
});

test("getAmbientGlowColor returns cosmic purple for Sci-Fi/Fantasy", () => {
  assert.strictEqual(getAmbientGlowColor({ genres: ["Sci-Fi"] }), "#a855f7");
  assert.strictEqual(getAmbientGlowColor({ genres: ["Fantasy"] }), "#a855f7");
});

test("getAmbientGlowColor returns neon pink for Romance/Drama", () => {
  assert.strictEqual(getAmbientGlowColor({ genres: ["Romance"] }), "#ec4899");
  assert.strictEqual(getAmbientGlowColor({ genres: ["Drama"] }), "#ec4899");
});

test("getAmbientGlowColor returns vibrant orange for Action/Adventure", () => {
  assert.strictEqual(getAmbientGlowColor({ genres: ["Action"] }), "#f97316");
  assert.strictEqual(getAmbientGlowColor({ genres: ["Adventure"] }), "#f97316");
});

test("getAmbientGlowColor returns anime teal for Anime/Animation/Japanese", () => {
  assert.strictEqual(getAmbientGlowColor({ genres: ["Anime"] }), "#14b8a6");
  assert.strictEqual(getAmbientGlowColor({ genres: ["Animation"] }), "#14b8a6");
});

test("getAmbientGlowColor returns comedy yellow for Comedy", () => {
  assert.strictEqual(getAmbientGlowColor({ genres: ["Comedy"] }), "#eab308");
});

test("getAmbientGlowColor returns default indigo if no genres match or if video is empty", () => {
  assert.strictEqual(getAmbientGlowColor({ genres: ["Documentary"] }), "#6366f1");
  assert.strictEqual(getAmbientGlowColor(null), "#6366f1");
});

// ==========================================
// 3. getEmbedUrl Unit Tests
// ==========================================
test("getEmbedUrl returns empty string if no config is passed", () => {
  assert.strictEqual(getEmbedUrl(null), "");
  assert.strictEqual(getEmbedUrl({}), "");
});

test("getEmbedUrl builds correct vidking movie URL", () => {
  const config = {
    video: { id: 37854, type: "movie" },
    selectedServer: "vidking",
    colorText: "e50914",
    autoplay: true,
    progress: 120
  };
  const expected = "https://www.vidking.net/embed/movie/37854?color=e50914&autoPlay=true&progress=120";
  assert.strictEqual(getEmbedUrl(config), expected);
});

test("getEmbedUrl builds correct vidking TV URL", () => {
  const config = {
    video: { id: 37854, type: "tv" },
    selectedServer: "vidking",
    selectedSeason: 2,
    selectedEpisode: 5,
    nextEpisode: true,
    episodeSelector: true
  };
  const expected = "https://www.vidking.net/embed/tv/37854/2/5?nextEpisode=true&episodeSelector=true";
  assert.strictEqual(getEmbedUrl(config), expected);
});

test("getEmbedUrl builds correct vidsrc URL for TV", () => {
  const config = {
    video: { id: 37854, type: "tv" },
    selectedServer: "vidsrc",
    selectedSeason: 1,
    selectedEpisode: 1
  };
  const expected = "https://vidsrc.xyz/embed/tv/37854/1/1";
  assert.strictEqual(getEmbedUrl(config), expected);
});

test("getEmbedUrl builds correct rive URL for Movie", () => {
  const config = {
    video: { id: 37854, type: "movie" },
    selectedServer: "rive"
  };
  const expected = "https://api.rive.fm/embed/play?type=movie&id=37854";
  assert.strictEqual(getEmbedUrl(config), expected);
});

test("getEmbedUrl builds correct Tamil (anyembed.xyz) movie URL", () => {
  const config = {
    video: { id: 299534, type: "movie" },
    selectedServer: "tamil",
    colorText: "6366f1"
  };
  const expected = "https://anyembed.xyz/embed/tmdb-movie-299534?theme=%236366f1&logo=false";
  assert.strictEqual(getEmbedUrl(config), expected);
});

test("getEmbedUrl builds correct Tamil (anyembed.xyz) TV URL", () => {
  const config = {
    video: { id: 1396, type: "tv" },
    selectedServer: "tamil",
    selectedSeason: 1,
    selectedEpisode: 1,
    colorText: "6366f1"
  };
  const expected = "https://anyembed.xyz/embed/tmdb-tv-1396-1-1?theme=%236366f1&logo=false";
  assert.strictEqual(getEmbedUrl(config), expected);
});

// ==========================================
// 4. getGenresFromIds Unit Tests
// ==========================================
test("getGenresFromIds maps TMDB IDs to genre names", () => {
  assert.deepStrictEqual(getGenresFromIds([28, 12]), ["Action", "Adventure"]);
});

test("getGenresFromIds returns ['Unknown'] if no IDs are passed", () => {
  assert.deepStrictEqual(getGenresFromIds([]), ["Unknown"]);
  assert.deepStrictEqual(getGenresFromIds(null), ["Unknown"]);
});

  test("getGenresFromIds appends 'Anime' for animation (16) originating in Japan", () => {
  assert.deepStrictEqual(getGenresFromIds([16], ["JP"]), ["Animation", "Anime"]);
  assert.deepStrictEqual(getGenresFromIds([16], ["US"]), ["Animation"]);
});


// ==========================================
// Execution Runner
// ==========================================
console.log("🚀 Starting ADvera Unit Tests...");
let passed = 0;
let failed = 0;

for (const t of tests) {
  try {
    t.fn();
    console.log(`✅ [PASS] ${t.name}`);
    passed++;
  } catch (err) {
    console.error(`❌ [FAIL] ${t.name}`);
    console.error(err.stack);
    failed++;
  }
}

console.log("\n==========================================");
console.log(`📊 Test Execution Complete:`);
console.log(`   - Passed: ${passed}`);
console.log(`   - Failed: ${failed}`);
console.log("==========================================");

if (failed > 0) {
  process.exit(1);
} else {
  console.log("🎉 All unit tests passed successfully!");
}
