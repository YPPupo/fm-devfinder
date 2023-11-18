import { useState, useEffect } from "react";

const useTheme = () => {
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("theme")) {
        return localStorage.getItem("theme") as "light" | "dark";
      }

      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  };

  return getInitialTheme();
};

export default useTheme;
