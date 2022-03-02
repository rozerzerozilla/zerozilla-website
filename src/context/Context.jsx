import React, { useState, useEffect, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    if (width <= 900) setIsMobile(true);
    if (width > 900) setIsMobile(false);
  }, [width]);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };
  return (
    <AppContext.Provider value={[isMobile, setIsMobile]}>
      {children}
    </AppContext.Provider>
  );
};
