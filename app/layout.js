"use client";

import "./globals.css";
import { Navbar, Footer } from "../components";
import { useState } from "react";

// export const metadata = {
//   title: 'EtherChannels Business',
//   description: 'Website from by EtherChannels Business',
// }

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const handleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar handleMode={handleMode} darkMode={darkMode} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
