import React from "react";
import { iComponent } from "@/types/types";
import Button from "@/components/ui/button";

const Header = ({ children, title, text, button }: iComponent) => {
  return (
    <div className="flex items-center justify-between my-5 py-2">
      <h2 className="w-1/2 text-7xl font-semibold leading-[5rem]">{title}</h2>
      <div className="w-1/2">
        <p className="font-light text-lg my-3 text-slate-900/80">{children}</p>
        {button && <Button variant="secondary">{text}</Button>}
      </div>
    </div>
  );
};

export default Header;
