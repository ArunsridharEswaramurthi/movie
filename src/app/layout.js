import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "VidkingStream – Premium Anime Streaming",
  description: "Curated streaming portal for One Piece and Demon Slayer series, movies, and specials with dynamic player configuration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
