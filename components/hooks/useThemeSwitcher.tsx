// "use client";

// import { useEffect, useState } from "react";

// const useThemeSwitcher = () => {
//   const preferDarkQuery = "(prefer-color-scheme)";
//   const [mode, setMode] = useState<string>("");

//   useEffect(() => {
//     const mediaQuery = window.matchMedia(preferDarkQuery);
//     const userPref = window.localStorage.getItem("them");

//     const handleChange = () => {
//       if (userPref) {
//         let check = userPref === "dark" ? "dark" : "light";
//         setMode(check);
//         if (check === "dark") {
//           document.documentElement.classList.add("dark");
//         } else {
//           document.documentElement.classList.remove("dark");
//         }
//       } else {
//         let check = mediaQuery.matches ? "dark" : "light";
//         setMode(check);

//         if (check === "dark") {
//           document.documentElement.classList.add("dark");
//         } else {
//           document.documentElement.classList.remove("dark");
//         }
//       }
//     };

//     mediaQuery.addEventListener("change", handleChange);

//     return () => mediaQuery.removeEventListener("change", handleChange);
//   }, []);

//   useEffect(() => {
//     if (mode === "dark") {
//       window.localStorage.setItem("theme", "dark");
//       document.documentElement.classList.add("dark");
//     } else {
//       window.localStorage.setItem("theme", "light");
//       document.documentElement.classList.remove("dark");
//     }
//   }, [mode]);

//   return [mode, setMode];
// };

// export default useThemeSwitcher;

"use client";

import { useEffect, useState, Dispatch, SetStateAction } from "react";

const useThemeSwitcher = (): [string, Dispatch<SetStateAction<string>>] => {
  const preferDarkQuery = "(prefer-color-scheme)";
  const [mode, setMode] = useState<string>("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);

        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
