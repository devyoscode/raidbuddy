"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { iButton } from "@/types/types";
import { useStateContext } from "@/context/statecontext";

const Button = ({ children, variant, link, size, sRef }: iButton) => {
  const router = useRouter();
  const { handleScrollClick } = useStateContext();

  let buttonSize: string;
  let buttonVariant: string;

  switch (size) {
    case "sm": {
      buttonSize = "h-9 px-3 text-sm";
      break;
    }
    case "lg": {
      buttonSize = "h-11 w-full py-2 justify-center";
      break;
    }
    default: {
      buttonSize = "py-3 px-5";
      break;
    }
  }

  switch (variant) {
    case "outline": {
      buttonVariant = "";
      break;
    }
    case "link": {
      buttonVariant = "text-slate-800 hover:text-slate-800/80";
      break;
    }
    case "icon": {
      buttonVariant = "";
      break;
    }
    case "secondary": {
      buttonVariant = "px-0 font-semibold text-lg";
      break;
    }
    case "navigation": {
      buttonVariant = "";
      break;
    }
    default: {
      buttonVariant = "bg-slate-900 text-slate-50 hover:bg-slate-800";
      break;
    }
  }

  const handleClick = () => {
    if (sRef) {
      handleScrollClick(sRef);
    }

    if (link) {
      router.push(link);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex ${buttonSize} items-center ${buttonVariant} `}
    >
      {children}
    </button>
  );
};

export default Button;
