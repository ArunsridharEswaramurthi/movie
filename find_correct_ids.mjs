import { ANIME_CATALOG } from "./src/lib/constants.js";

const API_KEY = "44531997758615c4af0f1d7724b5819d";

async function findCorrectIds() {
  console.log("Searching for correct TMDb IDs...");
  
  const corrections = {};

  for (const item of ANIME_CATALOG) {
    const { id, title, type } = item;
    // Perform multi or specific search
    const query = encodeURIComponent(title);
    const searchUrl = `https://api.themoviedb.org/3/search/${type === "movie" ? "movie" : "tv"}?api_key=${API_KEY}&query=${query}`;
    
    try {
      const res = await fetch(searchUrl);
      if (!res.ok) {
        console.log(`Failed search for: ${title}`);
        continue;
      }
      const data = await res.json();
      const results = data.results || [];
      
      if (results.length === 0) {
        console.log(`No search results for: ${title}`);
        continue;
      }
      
      // Let's find the best match
      let bestMatch = null;
      for (const resItem of results) {
        const resTitle = type === "movie" ? resItem.title : resItem.name;
        // Compare titles
        const clean = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
        if (clean(resTitle) === clean(title)) {
          bestMatch = resItem;
          break;
        }
      }
      
      if (!bestMatch && results.length > 0) {
        bestMatch = results[0]; // fallback to first result
      }
      
      if (bestMatch) {
        const foundTitle = type === "movie" ? bestMatch.title : bestMatch.name;
        const foundId = bestMatch.id;
        
        if (foundId !== id) {
          console.log(`Mismatched ID for: "${title}". Current ID: ${id}, Found correct ID: ${foundId} ("${foundTitle}")`);
          corrections[title] = { oldId: id, newId: foundId, foundTitle };
        } else {
          console.log(`Verified OK: "${title}" has ID: ${id}`);
        }
      }
    } catch (err) {
      console.log(`Error searching for ${title}: ${err.message}`);
    }
  }

  console.log("\nCorrections JSON object:");
  console.log(JSON.stringify(corrections, null, 2));
}

findCorrectIds();
