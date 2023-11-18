"use client";

import React, { useEffect, useState } from "react";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";
import useTheme from "../hooks/usetTheme";

const INITIALTHEMESTATE = useTheme();

const Navbar = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(INITIALTHEMESTATE);


  useEffect(()=> {
    setHasMounted(true)
  },[])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  if(!hasMounted){
    return <></>
  }

  const handleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <header className="flex items-center space-x-2 mb-10">
      <h1 className="text-3xl dark:text-white text-blue-950 font-bold flex-grow">
        devfinder
      </h1>

      <div className="flex items-center" onClick={handleTheme}>
        <span className="uppercase dark:text-white text-blue-950">
          {theme === "light" ? "Dark" : "Light"}
        </span>
        <button>
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
