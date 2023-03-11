"use client";

import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { useState } from "react";
import { Navbar, Hero, Footer } from "../components";

// const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      {/* <Navbar handleMode={handleMode} darkMode={darkMode} /> */}
      <div>
        <Hero />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
