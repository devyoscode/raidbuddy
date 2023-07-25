import React from "react";
import { iInput } from "@/types/types";

const Input = ({ title, setState, state }: iInput) => {
  return (
    <div className="">
      <h5 className="text-sm font-medium text-slate-900 my-1">{title}</h5>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="h-10 w-full bg-slate-white border-slate-400/50 rounded border-2 shadow-lg px-3 text-slate-900/50"
        required
      />
    </div>
  );
};

export default Input;
