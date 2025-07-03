import { Sun, Moon } from "lucide-react";
import { useState } from "react";
import { isDarkMode, toggleDarkMode } from "../utils/darkMode";

export const DarkMode = () => {
  const [dark, setDark] = useState(isDarkMode());
  const handleClickDarkMode = () => setDark(toggleDarkMode());

  return (
    <button
      onClick={handleClickDarkMode}
      className="transition-all duration-200 hover:scale-110 active:outline-none"
    >
      {dark && <Sun className="hover:text-amber-300" />}
      {!dark && <Moon className="hover:text-sky-700" />}
    </button>
  );
};
