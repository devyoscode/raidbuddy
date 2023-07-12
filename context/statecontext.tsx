"use client";

import React, { createContext, useContext, useRef } from "react";
import { iContext, iContextProps } from "@/types/types";

const Context = createContext({} as iContext);

export const StateContext = ({ children }: iContextProps) => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const handleScrollClick = (
    ref: React.MutableRefObject<HTMLDivElement | null>
  ) => {
    if (!ref) return;
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Context.Provider
      value={{ aboutRef, projectsRef, contactRef, handleScrollClick }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
