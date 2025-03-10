import "../styles/global.css";
import { MuseoModerno } from "next/font/google";
import { layoutContainer } from "./style.css";
import "./globals.css";

export const metadata = {
  title: "StakeKit",
  description: "StakeKit",
};

const museoModerno = MuseoModerno({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--sk-font-museo-moderno",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${museoModerno.className}`}>
      <link rel="icon" href="/icon.png" />
      <body className={layoutContainer}>{children}</body>
    </html>
  );
}
