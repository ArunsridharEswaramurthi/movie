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
  title: "ADvera – Premium Streaming Portal",
  description: "Premium streaming portal for movies, web series, and anime with multiple server engines.",
  manifest: "/manifest.json",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none'><path d='M 78 70 A 38 38 0 1 0 35 84' stroke='%236366f1' stroke-width='9' stroke-linecap='round' /><path d='M 32 75 L 58 22 L 72 75 M 48 48 L 78 48 L 65 38' stroke='%23ec4899' stroke-width='10' stroke-linecap='round' stroke-linejoin='round' /></svg>",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
