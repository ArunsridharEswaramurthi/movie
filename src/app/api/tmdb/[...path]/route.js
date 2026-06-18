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

  // Build the target TMDb URL
  const targetPath = path.join("/");
  const tmdbUrl = new URL(`https://api.themoviedb.org/3/${targetPath}`);
  
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
      next: { revalidate: 3600 } // Cache results for 1 hour
    });
    
    if (!res.ok) {
      return NextResponse.json(
        { error: `TMDb responded with status ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (e) {
    console.error("TMDb Proxy Error:", e);
    return NextResponse.json({ error: "Failed to fetch from TMDb" }, { status: 500 });
  }
}
