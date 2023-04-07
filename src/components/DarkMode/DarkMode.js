"use client";
import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
export default function DarkMode() {
  const { systemTheme, theme, setTheme } = useTheme();

  //check if theme is equal system else use selected theme
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            className="text-xl cursor-pointer dark:text-white dark:hover:text-[#FF2883] "
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsFillMoonFill
            className="text-xl cursor-pointer dark:text-white hover:text-[#FF2883] "
            onClick={() => setTheme("dark")}
          />
        ))}
    </>
  );
}
