import React from "react";
import "./DarkMode.css";
import { ChangeEventHandler } from "react";

// 1
const setDark = () => {

  // 2
  localStorage.setItem("theme", "dark");

  // 3
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

// 4
const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

// 5
const DarkMode = () => {
  return (    
    <div className="toggle-theme-wrapper">
<button onClick={setDark}>Dark</button>
<button onClick={setLight}>Light</button>
    </div>
  );
};

export default DarkMode;