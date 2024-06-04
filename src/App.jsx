import { useEffect, useState } from "react";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Search from "./components/Search";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="dark:bg-[#212e37]">
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <main className="bg-gray-100 dark:bg-[#212e37]">
        {/* <Search /> */}
        <Countries />
      </main>
    </div>
  );
}
