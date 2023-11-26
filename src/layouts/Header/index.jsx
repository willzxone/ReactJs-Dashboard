import { Labels } from "./labels";
import { UserControls } from "./userControls";
import { useState, useEffect } from "react";
export const Header = () => {
  // const [theme, setTheme] = useState(null);

  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // }, []);

  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="w-[100%] ">
      <div className="mt-12 w-[100%] flex justify-between items-end">
        <Labels />
        <UserControls handleThemeSwitch={handleThemeSwitch} />
      </div>
    </header>
  );
};
