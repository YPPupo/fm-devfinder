"use client";

import React, { useState } from "react";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="flex items-center space-x-2 mb-10">
      <h1 className="text-3xl dark:text-white text-blue-950 font-bold flex-grow">
        devfinder
      </h1>

      <div className="flex items-center" onClick={handleTheme}>
      <span className="uppercase dark:text-white text-blue-950">
        {theme === "light" ? "Dark" : "Light"}
      </span>
      <button >
        {theme === "light" ? (
          <MoonIcon className="dark:fill-white fill-blue-950s" width={25} />
        ) : (
          
          <SunIcon className="dark:fill-white fill-blue-950s" width={25} />
        )}
      </button>
      </div>
    </header>
  );
};

export default Navbar;
