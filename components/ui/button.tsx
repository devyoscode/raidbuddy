"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { iButton } from "@/types/types";
import { useStateContext } from "@/context/statecontext";

const Button = ({ children, variant, link, size, sRef, onClick }: iButton) => {
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
    case "dropdown": {
      buttonSize = "h-8 w-full text-sm";
      break;
    }
    default: {
      buttonSize = "py-3 px-5 gap-2";
      break;
    }
  }

  switch (variant) {
    case "dropdown": {
      buttonVariant = "flex px-3 gap-2 text-slate-800 ";
      break;
    }
    case "link": {
      buttonVariant = "text-slate-800 hover:text-slate-800/80";
      break;
    }
    case "icon": {
      buttonVariant = "flex px-3 gap-2 text-slate-800  hover:bg-slate-300/30";
      break;
    }
    case "secondary": {
      buttonVariant = "ml-[-18px] font-semibold text-lg";
      break;
    }
    case "flipped": {
      buttonVariant = "bg-slate-50 text-slate-900 hover:bg-slate-100";
      break;
    }
    default: {
      buttonVariant = "bg-slate-900 text-slate-50 hover:bg-slate-800";
      break;
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (sRef) {
      handleScrollClick(sRef);
    }

    if (link) {
      router.push(link);
    }

    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <button
      onClick={(e) => handleClick(e)}
      className={`flex ${buttonSize} items-center ${buttonVariant} `}
    >
      {children}
    </button>
  );
};

export default Button;
