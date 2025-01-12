import React, { createContext, useRef } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const divRef = useRef(null);

  return (
    <ScrollContext.Provider value={divRef}>
      {children}
    </ScrollContext.Provider>
  );
};
