"use client";

import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { useState } from "react";
import { Hero } from "../components";

// const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
