import { Geist, Geist_Mono } from "next/font/google"; // font dari google 
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pemasaran Desa Sumber Fajar",
  description: "Team Web Dev KKN-TEMATIK ITERA Periode-14 di Desa Sumber Fajar, Lampung Tengah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
