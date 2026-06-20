import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  // Access path parameters from Route Handler context
  const resolvedParams = await params;
  const path = resolvedParams.path;
  const { searchParams } = new URL(request.url);

  // Retrieve user custom API key from header or fallback
  const customKey = request.headers.get("x-tmdb-key");
  const systemKey = process.env.TMDB_API_KEY || "";
  const apiKey = customKey || systemKey;

  if (!apiKey) {
    return NextResponse.json({ error: "TMDb API Key not configured." }, { status: 401 });
  }

  const targetPath = path.join("/");
  
  // Try api.tmdb.org first, then fall back to api.themoviedb.org
  const hosts = ["api.tmdb.org", "api.themoviedb.org"];
  let lastError = null;

  for (const host of hosts) {
    const tmdbUrl = new URL(`https://${host}/3/${targetPath}`);
    
    // Forward all query parameters
    searchParams.forEach((value, key) => {
      if (key !== "api_key") {
        tmdbUrl.searchParams.append(key, value);
      }
    });
    
    // Append API key
    tmdbUrl.searchParams.append("api_key", apiKey);

    try {
      const res = await fetch(tmdbUrl.toString(), {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Accept": "application/json"
        },
        next: { revalidate: 3600 } // Cache results for 1 hour
      });
      
      if (res.ok) {
        const data = await res.json();
        return NextResponse.json(data);
      }
      
      // If TMDb returns an HTTP error (like 404), return it directly without trying other hosts
      return NextResponse.json(
        { error: `TMDb responded with status ${res.status}` },
        { status: res.status }
      );
    } catch (e) {
      console.warn(`Failed to fetch from ${host}:`, e.message || e);
      lastError = e;
    }
  }

  console.error("TMDb Proxy Error - All hosts failed:", lastError);
  return NextResponse.json({ error: "Failed to fetch from TMDb", details: lastError?.message || String(lastError) }, { status: 500 });
}
