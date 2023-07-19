"use client";

import { useEffect, useState } from "react";
import Navtitle from "./Navtitle";

export default function Navbar() {
  const [isShown, setShowFlg] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    } else {
      return;
    }
  }, []);

  return (
    <div className="navbar">
      <nav className="flex items-center justify-between flex-wrap bg-zinc-800 p-6">
        <Navtitle title="Website" />
        <div className="nav-btn lg:hidden" onClick={() => setShowFlg(!isShown)}>
          <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-300 hover:border-gray-300">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className={`nav-item w-full flex-grow lg:items-center lg:w-auto ${isShown ? "max-h-60" : "max-h-0 lg:max-h-60"} transition-all ${windowSize.width < 1024 ? "duration-700" : "duration-0"} overflow-hidden`}>
          <div className="text-sm">
            {["Home", "About"].map((item) => (
              <a
                href={`/${item === "Home" ? "" : item.toLowerCase()} `}
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}
