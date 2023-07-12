import React from "react";
import { iComponent } from "@/types/types";

const Faq = ({ title, children }: iComponent) => {
  return (
    <div className="flex flex-col w-1/3 h-40 my-3 gap-3">
      <h5 className="font-semibold text-xl text-slate-800">{title}</h5>
      <p className="text-lg font-light text-slate-900/80 pr-10">{children}</p>
    </div>
  );
};

export default Faq;
