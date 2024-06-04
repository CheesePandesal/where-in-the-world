import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="px-8 lg:px-12 py-12 flex justify-between items-center shadow-lg dark:bg-[#2b3741]">
      <h1 className="font-bold text-lg md:text-2xl dark:text-white">Where in the world?</h1>
      <button
        className="flex gap-2 items-center"
        onClick={() => {
          setDarkMode(!darkMode);
          console.log(darkMode);
        }}
      >
        <div className="dark:text-white">
          {darkMode ? <FiSun size={25}/> : <FiMoon size={25}/>}
        </div>
        <h5 className="font-semibold dark:text-white">{darkMode ? "Light Mode" : "Dark Mode"}</h5>
      </button>
    </header>
  );
};

export default Header;
